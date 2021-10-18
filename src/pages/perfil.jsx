import Layout from "../components/tampletes/Layout";
import { AppConsumer } from "../dados/context/AppContext";
import useDados from "../dados/hook/usaAppdados";

export default function Perfil() {
  
  const dados = useDados()

  return (
    <Layout titulo="Perfil" subtitulo="Perfil do usuario">
      <h3>Perfil administre seu perfil</h3>

  
    </Layout>
  )
}
