import { createContext, useState } from 'react'
const AppContext = createContext({
    ligar: true,
   
})

export function AppProvider(props) {
    const [tema,setTema] =useState(false)
    const [dark,setDark] =useState('dark')

    function alternar() {
        if(tema){
            setTema(false)
            setDark('')
        }else{
            setTema(true)
            setDark('dark')
        }
    }


    
   
    return (

        <AppContext.Provider value={{
            nome: "Teste conetxte api",
            tema,
            dark,
            alternar: alternar
        }}>
            
            {props.children}
        </AppContext.Provider>

    )
}

export const AppConsumer = AppContext.Consumer
export default AppContext