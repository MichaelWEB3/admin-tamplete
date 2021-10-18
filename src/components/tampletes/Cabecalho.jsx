import Alternar from './btnAlterna'
import  Titulo from './Titulo'
import useDados from "../../dados/hook/usaAppdados";
import AvatarUsuario from './AvatarUsuario';
export default function Cabecalho(props) {
    //props.titulo
    //props.subtitulo

    const dados =  useDados()
    return (
        <div className={`flex`}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}></Titulo>
            <div className={`flex flex-grow justify-end items-center
               
            `}>
                    <Alternar tema={dados.dark} alterna={dados.alternar}/>
                    <AvatarUsuario></AvatarUsuario>
            </div>
        </div>
    )
}