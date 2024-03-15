import { useForm } from "../hooks/useForm";

interface formData {
    nombre: string,
    email: string,
    edad: number
}

const Formulario = () => {

    const {nombre, email, edad, handleChange, formulario} = useForm<formData>({ //*ACA utilizo el customHook
        email: "",
        nombre: "",
        edad: 35
    })


// const [formulario, setFormulario] = useState({
//     email: "",
//     nombre: ""
// });

// // const handleChange = (ev:ChangeEvent<HTMLInputElement>) => {
// // console.log(ev.target.value)
// // console.log(ev.target.name)
// //* } ESTO ES LO MISMO QUE LODE ABAJO PERO QUEDA MEJOR EL OTROCODIGO
// const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
// const {name, value} = target;

//     setFormulario({
//         ...formulario,
//         [name]: value,
//     })
// }

  return <form autoComplete="off">
    <div>
        <label>Email:</label>
        <input type="email"
        name="email"
        value={email}
        onChange= {(ev) => handleChange(ev)}
        />
        
    </div>

    <div>
        <label>Nombre:</label>
        <input type="text"
        name="nombre"
        value={nombre}
        onChange={handleChange}
        />
    </div>

    <div>
        <label>Edad:</label>
        <input type="number"
        name="edad"
        value={edad}
        onChange={handleChange}
        />
    </div>

    <pre> {JSON.stringify(formulario)}</pre>
  </form>;
};

export default Formulario;
