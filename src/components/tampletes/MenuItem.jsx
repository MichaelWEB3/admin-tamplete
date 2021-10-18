import Link from 'next/link'

export default function MenuItem(props) {

  
    return (
        <li className={`
            hover:bg-gray-200
            dark:hover:bg-gray-800
        `}>

            <Link href={`${props.url }`}>
                <a className={`
                flex flex-col justify-center items-center
                h-20 w-20
                dark:text-gray-200
                `}  >  {props.icon} <span className={` text-xs font-light text-gray-600`}>{props.texto}</span></a>
            </Link>    
         
        </li>

    )
}