import Layout from "../components/tampletes/Layout";
import { AppConsumer } from "../dados/context/AppContext";
import useDados from "../dados/hook/usaAppdados";

export default function Notificacoes() {
  
  const dados = useDados()

  return (
    <Layout titulo="Notificacoes" subtitulo="Construindo tamplete Notificacoes">
      <h3>Notification</h3>

   
    </Layout>
  )
}
