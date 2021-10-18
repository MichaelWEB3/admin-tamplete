import Link from 'next/link'

export default function Sair(props) {

    function sair(saida){
        return saida
    }
  
    return (
        <li className={`
            hover:bg-gray-200
            cursor-pointer
        `} onClick={sair(props.onClick)}>

        
                <a className={`
                flex flex-col justify-center items-center
                h-20 w-20
                text-red-500
                hover:bg-red-400 hover:text-white
                `}  >  {props.icon} <span className={` text-xs font-light  text-red-500 hover:text-white`}>{props.texto}</span></a>
             
         
        </li>

    )
}