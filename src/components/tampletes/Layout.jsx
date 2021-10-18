import { useState } from "react";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLatera";
import useDados from "../../dados/hook/usaAppdados";
import Alternar from "./btnAlterna";
import ForcarAutenticacao from "../auth/forcarAutenticacao";


export default function Layout(props) {
    const dados = useDados()
    let dark = false

    if (dados.dark == 'dark') {
        dark = true
    } else {
        dark = false
    }


    return (
        <ForcarAutenticacao>
            <div className={`
        ${dark ? 'dark' : false}
        flex 
          h-screen w-screen
          dark:text-gray-100
        `}>

                <MenuLateral></MenuLateral>

                <div className={`
                flex flex-col
                bg-gray-400 
                dark:bg-gray-800
                dark:text-gray-100
                w-full
                p-7

            `}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}></Cabecalho>


                    <Conteudo>


                        {props.children}
                    </Conteudo>
                </div>


            </div>
        </ForcarAutenticacao>
    )
}