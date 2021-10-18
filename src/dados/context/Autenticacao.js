import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/config";
import route from "next/router";
import Cookies from "js-cookie";
const Autenticacao = createContext({})


async function usuaRionormalizado(usuarioFirebase) {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        povedor: usuarioFirebase.providerData[0].providerId,
        imgURl: usuarioFirebase.photoURL
    }
}


function GerenciarCookie(logado) {
    if (logado) {
        Cookies.set('templete-admin-autenticacao', logado, {
            //dias logado
            expires: 7
        })
    } else {
        Cookies.remove('templete-admin-autenticacao')
    }
}


export function ContextoProvider(props) {

    const [usuario, setUsuario] = useState({})
    const [carregando, setcarregando] = useState(true)

    async function configurarSessao(usuarioFirebase) {
        if (usuarioFirebase?.email) {
            const usuario = await usuaRionormalizado(usuarioFirebase)
            setUsuario(usuario)
            GerenciarCookie(true)
            setcarregando(false)
            return usuario.email
        } else {
            setUsuario(null)
            GerenciarCookie(false)
            setcarregando(false)
            return false
        }
    }

    async function Login(email, senha) {
        const resp = await firebase.auth().signInWithEmailAndPassword(email, senha)
        if (resp.user?.email) {

            //const usuario = await usuaRionormalizado(resp.user)
            //setUsuario(usuario)
            await configurarSessao(resp.user)
            route.push('/')

        }
    }

    async function LoginGoogle() {

        const resp = await firebase.auth().signInWithPopup(

            new firebase.auth.GoogleAuthProvider()
        )

        if (resp.user?.email) {

            //const usuario = await usuaRionormalizado(resp.user)
            //setUsuario(usuario)
            await configurarSessao(resp.user)
            route.push('/')

        }

    }

    async function Cadastrar(email, senha) {
        const resp =  await firebase.auth().createUserWithEmailAndPassword(email, senha)
        if (resp.user?.email) {
            await configurarSessao(resp.user)
            route.push('/')
        }
    }

    async function sair() {
        //try opcional
        try {
            setcarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setcarregando(false)
        }
    }

    useEffect(() => {
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
        return () => cancelar()
    }, [])

    return (

        <Autenticacao.Provider value={{
            usuario: usuario,
            LoginGoogle: LoginGoogle,
            Login,
            carregando,
            configurarSessao,
            sair,
            Cadastrar
        }}>
            {props.children}
        </Autenticacao.Provider>
    )
}

export default Autenticacao
