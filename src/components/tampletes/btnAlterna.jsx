import { IconLua, SolIcone } from "../../icons";

export default function btnAlterna(props) {
  


    return props.tema === 'dark' ? (
        <div onClick={props.alterna} className={`
        hidden sm:flex item-center
        bg-gradient-to-r from-yellow-300 to-yellow-600
         w-18  lg:w-24 h-8
        cursor-pointer rounded-full
        p-1
        `}>
            <div className={`
            hidden lg:flex
            w-24 h-8
            ml-4
            `}>
                <span>Claro</span>
            </div>
            <div >
                {SolIcone}
            </div>

        </div>
    ) :
        (
            <div onClick={props.alterna} className={`
            hidden sm:flex item-center
            bg-gradient-to-r from-blue-800 bg-gray-800
            w-14 lg:w-24 h-8
            cursor-pointer rounded-full
            p-1
            text-white
            `}>
                <div className={`
          
               
                `}>
                    {IconLua}
                </div>
                <div className={`
                hidden lg:flex
                w-24 h-8
                ml-3
                
                `}>
                    <span>Escuro</span>
                </div>
            </div>
        )

}