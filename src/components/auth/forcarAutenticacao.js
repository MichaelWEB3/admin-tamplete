import router from "next/router"
import useAth from "../../dados/hook/AutenticacaoUsuario"
import Cookies from "js-cookie"
export default function ForcarAutenticacao(props) {


    const cokie = Cookies.get('templete-admin-autenticacao')
    const { usuario, carregando } = useAth()

    function renderizarConteudo() {


        if (cokie) {
            return (
                <>
                    {props.children}
                </>
            )
        }

    }


    function renderizarCarregando() {
        return (
            <div className={`
             flex justify-center items-center h-screen
         
         `}>
                <img src={'/imagens/loading.svg'}></img>
            </div>
        )
    }

    if (!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if (carregando) {
        return renderizarCarregando()
    } else {
        router.push('autenticacao')
        return null
    }
}