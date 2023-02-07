//aqui em preciso importar o context e o countercontext e chamar ele dentro da função..pronto, na pagina "SOBRE" eu tbm tenho acesso ao contador


import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const About = () => {
  const  {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Sobre</h1>
      <p>Valor do contador: {counter} </p>
    </div>
  )
}

export default About