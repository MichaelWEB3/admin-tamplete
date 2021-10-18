import { useState } from "react";
import InputAut from "../components/auth/inputAut";
import { ErroIcon } from "../icons";
import useAth from '../dados/hook/AutenticacaoUsuario'

export default function Autenticacao() {


    const autenticacaoUser = useAth()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cofisenha, setcofisenha] = useState('')
    const [modo, setModo] = useState('login')
    const [erro, setErro] = useState(false)

    async function submite() {
        if (modo == 'login') {

            try {

                await autenticacaoUser.Login(email, senha)

            } catch (e) {
                exibirErro("erro login: " + e?.message, 2)
            }

            exibirErro("erro login", 2)
        } else {
            try {
                if (senha == cofisenha) {

                    await autenticacaoUser.Cadastrar(email, senha)
                    
                } else {
                    exibirErro("As senhas devem ser iguais preste atenção", 2)
                }
            } catch (e) {
                exibirErro("Erro no cadastro: " + e?.message, 2)
            }

        }
    }



    function exibirErro(msg, tempoS = 5) {
        setErro(msg)
        setTimeout(() => {
            return setErro(false)
        }, tempoS * 1000)

    }


    return (

        <div className={`
            flex  h-screen items-center justify-center
        `}>
            <div className={`
            hidden md:flex
                w-1/2
            `}>
                <img className={`
                h-screen w-full object-cover
                `} src="https://source.unsplash.com/random" alt="imagem tela de cadastroo"></img>
            </div>
            <div className={`
             m-10
             w-1/2
         `}>
                <h1 className={`
                text-xl
                font-bold
                mb-5
               
            
            `}>{modo == 'login' ? 'Login' : 'Cadastre-se na plataforma'}</h1>
                <InputAut value={email} setValor={setEmail} label="Email" type="email"></InputAut>
                <InputAut value={senha} setValor={setSenha} label="Senha" type="password"></InputAut>
                {modo == 'cadastrar' ? <InputAut value={cofisenha} label="Confirma senha" type="password" setValor={setcofisenha}></InputAut> : false}

                <button className={`
                w-full bg-indigo-500
                hover:bg-indigo-400
                text-white
                rounded-lg
                px-4 py-3
                mt-6
            `} onClick={submite}>{modo == 'login' ? 'Logar' : 'Cadastrar'}</button>
                <hr className={`
                my-6 border-gray-300 w-full
             `} />

                <button className={`
                w-full bg-red-500
                hover:bg-red-400
                text-white
                rounded-lg
                px-4 py-3
                mt-6
            `} onClick={autenticacaoUser.LoginGoogle}>Entrar com Google</button>

                {modo === 'login' ? <p>
                    Não é cadastado(a) ?
                    <a onClick={() => setModo('cadastrar')} className={`
                        text-blue-500
                        cursor-pointer
                    `}>Crie sua conta</a>

                </p> : <p>
                    Ja é cadastrado(a) ?
                    <a onClick={() => {
                        setModo('login')

                    }
                    } className={`
                      text-blue-500
                      cursor-pointer
                    `}>Entre com sua conta</a>


                </p>}

                {erro ? <div className={`
                bg-red-400
                text-white
                py-5
                px-2
                my-2
                border border-red-700 rounded-lg
                `}>
                    Ocorreu um erro: {erro}  {ErroIcon}
                </div> : false}

            </div>
        </div>
    )
}