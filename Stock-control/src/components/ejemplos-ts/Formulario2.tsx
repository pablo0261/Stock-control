import { useForm } from "../hooks/useForm";

const Formulario2 = () => {

    const {formulario, handleChange} = useForm({
        apellido: "",
        ciudad: ""
    })

    const {apellido, ciudad} = formulario

  return <form autoComplete="off">
    <div>
        <label>Apellido:</label>
        <input type="text"
        name="apellido"
        value={apellido}
        onChange= {(ev) => handleChange(ev)}
        />
        
    </div>

    <div>
        <label>Ciudad:</label>
        <input type="text"
        name="ciudad"
        value={ciudad}
        onChange={handleChange}
        />
    </div>

    <pre> {JSON.stringify(formulario)}</pre>
  </form>;
};

export default Formulario2;
