import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../dados/context/AppContext'
import { ContextoProvider } from '../dados/context/Autenticacao'

function MyApp({ Component, pageProps }) {
  return (
    <ContextoProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ContextoProvider>

  )
}

export default MyApp
