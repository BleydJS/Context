import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import {CounterContext} from "../context/CounterContext" //os 2 devem ser importados


// context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  const {counter} = useContext(CounterContext) //agora se pode desestruturar o counter la do usecontext(countercontext) dessa forma esta se cunsumindo o valor de contexto que esta sendo compartilhado la do CounterContext aqui na home.

  // constext mais complexo
  const {color, dispatch} = useTitleColorContext()

  const setTitlecolor = (color) => {
    dispatch( {type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter} </p>
      {/* ALTERANDO VALOR contexto */}
      <ChangeCounter />
      {/*ALTERANDO CONTEXTO COMPLEXO */}
      <button onClick={() => setTitlecolor("RED")}>vermelho</button>
      <button onClick={() => setTitlecolor("BLUE")}>azul</button>
    </div>
    
  )
}

export default Home


// em resumo:
// primeiro se cria um context e o provider obrigatoriamente como se pode ver em CounterContext.js dentro da pasta context..que nesse caso foi um contador como vc pode verificar no projeto.

//Só com ele ja da pra chamar na pagina de home e ver ele na tela <p>Valor do contador: {counter} </p>
//somente isso eu ja consigo chamar essa mesma informação para todas as paginas, so fazer a mesma coisa <p>Valor do contador: {counter} </p> 
//que o acesso é total..so tenho que lembrar de fazer os imports em cada pagina corretamente.

//proximo passo agora é adicionar um botão que cada vez que clica aumenta +1, logo, tem um componente chamado de ChangeCounter.js para fazer esse incremento, so chamo ele na pasta home <ChangeCounter />

//agora vamos refatorar um contexto para um hook..na pasta hook crio o useCounterContext.js o codigo praticamente é todo padrão, se atentar
//a fazer todos os imports corretamente..tudo a partir do CounterContext.js criado na pasta context..
//Pronto, ja tenho o hook dele pronto, agora posso chamar ele na pagina produtos por exemplo sem precisar chamar os imports do context,
//somente o import do hook criado import { useCounterContext } from "../hooks/useCounterContext".

//o mesmo vale pro TitleColorContext.js...é a mesma coisa.