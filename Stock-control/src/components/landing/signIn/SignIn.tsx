
import style from "./SignIn.sass";
// import Swal from "sweetalert2";
import {useForm} from "../../../hooks/useForm"


interface sigInData {
fullName: string,
email: string,
password: string,
}


export default function SignIn() {
  const { formulario, handleChange, handleSubmit, showPassword, handleTogglePassword, signInView, handleFormsVisibility } = useForm<sigInData>({
    fullName: "",
    email: "",
    password: "",
  });


  return (
    <div className={style.wrapper}>
      <p className={style.title}></p>
      {signInView && (
        <form onSubmit={handleSubmit}>
          <div className={style.inputWrapper}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formulario.fullName}
              onChange={handleChange}
              placeholder="Nombre y Apellido"
            />
          </div>

          <div className={style.inputWrapper}>
            <input
              id="email"
              name="email"
              type="email"
              value={formulario.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
          </div>

          <div className={style.inputPassword}>
            <div className={style.password}>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formulario.password}
                onChange={handleChange}
                placeholder="Contraseña"
              />
              <div
                onClick={handleTogglePassword}
                className={showPassword ? style.hidePassword : style.showPassword}
              ></div>
            </div>
          </div>

          <div>
            <button type="submit" className={style.buttonSubmit}>
              Registrarse
            </button>
          </div>
        </form>
      )}
      <div className={style.Questions}>
        <p className={style.text}>¿Ya tienes una cuenta?</p>
        <button
          onClick={() => {
            handleFormsVisibility();
          }}
          className={style.buttonHandle}
        >
          Iniciar Sesión
        </button>
      </div>
      <pre> {JSON.stringify(formulario)}</pre>
    </div>
  );
}
