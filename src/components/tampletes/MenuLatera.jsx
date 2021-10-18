import MenuItem from "./MenuItem";
import { Ajustesicon, Homeicone, NotificacosIcon, sairIcone } from "../../icons";
import Logo from "./Logo";
import Sair from "./Sair";
import Dados from '../../dados/hook/AutenticacaoUsuario'
export default function MenuLateral() {
    const dados =Dados()
    return (
        <aside className={`
        dark:bg-gray-900 dark:text-gray-200
        bg-gray-200 dark:text-gray-700
        flex flex-col
        `}>

            <div className={`
              
                flex flex-col items-center justify-center    
                bg-gradient-to-r from-indigo-500  to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>

            <ul className={`
           flex-grow
          `}>
                <MenuItem icon={Homeicone} texto="Home" url="/"></MenuItem>
                <MenuItem icon={Ajustesicon} texto="Ajustes" url="/ajustes" ></MenuItem>
                <MenuItem icon={NotificacosIcon} texto="Notificações" url="/notificacoes"></MenuItem>
            </ul>

            <ul className={`
           
          `}>
             <Sair icon={sairIcone} texto="sair" onClick={dados.sair}>

             </Sair>

            </ul>
        </aside>
    )
}