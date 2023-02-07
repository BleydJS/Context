//esse eu comentei pra mostrar como se REFATORA UM CONTEXTO para o hook...fiz ele no hook, e so chamo ele aqui em ter que importar nada, isso deixa o codigo mais limpo

//import { useContext } from "react"      
//import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/useCounterContext"

const Products = () => {
  // const  {counter} = useContext(CounterContext)
    const {counter} = useCounterContext
  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter} </p>
    </div>
  )
}

export default Products