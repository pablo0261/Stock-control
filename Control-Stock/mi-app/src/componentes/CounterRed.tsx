import { useReducer } from "react"

const initialState = {
    contador: 0
}

type ActionType = 
   | {type: "incrementar"}
   | {type: "decrementar"}


const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case "incrementar":
            return  { ...state, contador: state.contador + 1}

        case "decrementar":
            return  { ...state, contador: state.contador - 1}
        
        default:
            return state;
    }

}

export const CounterRed = () => {

    const [contadorState, dispatch] = useReducer(contadorReducer, initialState)
  return (
    <>
      <h2>CounterRed: {contadorState.contador}</h2>
      <button
      onClick={() =>  dispatch({ type: "incrementar"})}>
        + 1
      </button>
      <button
      onClick={() =>  dispatch({ type: "decrementar"})}>
        - 1
      </button>
    </>
  );
};

export default CounterRed;
