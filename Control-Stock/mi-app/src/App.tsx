import { Counter } from "./componentes/Counter";
import CounterRed from "./componentes/CounterRed";
import TimerPadre from "./componentes/TimerPadre";
import Usuario from "./componentes/Usuario";

function App() {
  return (
    <>
    <h1>Hola Typescript iniciando</h1>
    <hr/>
    <Counter />
    <hr/>
    <Usuario />
    <hr/>

    <h2>useEffect - useRef</h2>

    <TimerPadre/>
    <hr/>

    <h2> useReducer</h2>
    <CounterRed/>
    <hr/>
    </>
  );
}

export default App;
