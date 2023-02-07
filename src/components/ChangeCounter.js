// esse componente é para mostrar como funciona a alteração de um valor, e ele se mantem em todas as abas da pagina, pois todo o app esta dentro dele..esse contador vai fazer parte do site inteiro, e para ver ele, so chamar ele onde quiser.

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";


const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Add value to counter</button>
    </div>
  )
}

export default ChangeCounter