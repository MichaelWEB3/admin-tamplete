
import Link from 'next/link'
import Dados from '../../dados/hook/AutenticacaoUsuario'

export default function AvatarUsuario(){
    const dados = Dados()
    
    return(
        <Link href="/perfil">
            {dados.carregando ? <img src={'/imagens/loading.svg'}  className={`
            w-20 h-15
            rounded-full
            cursor-pointer
            ml-3
            `} palt="avatar usuario"></img>: <img src={dados.usuario?.imgURl?? '/imagens/avatar.svg' }  className={`
            w-20 h-15
            rounded-full
            cursor-pointer
            ml-3
            `} palt="avatar usuario"></img>}
           
        
        </Link>
    )
}