import Layout from "../components/tampletes/Layout";
import useDados from "../dados/hook/usaAppdados";
import { AppProvider } from "../dados/context/AppContext";
export default function Home() {
  const dados = useDados()
  return (
    <Layout titulo="Pagina inicial" subtitulo="Construindo tamplete admin">
        <h3>Conteudo</h3>
  
    </Layout>
  )
}
  