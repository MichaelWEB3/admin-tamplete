import { useContext } from "react";
import Autenticacao from '../context/Autenticacao'

const useAth =  () =>  useContext(Autenticacao)

export default useAth