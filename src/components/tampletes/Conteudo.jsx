export default function Conteudo(props) {
    //props.Conteudo
    //props.subConteudo
    return (
        <div className={`flex flex-col mt-7`}>
            {props.children}
        </div>
    )
}