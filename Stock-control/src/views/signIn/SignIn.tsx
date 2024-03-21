import { Form, Formik } from "formik";
import FormikInput from "../../components/formik/FormikInput.js";
import SigninValidationSchema from "./SignInValidation.js";
import { Link } from "react-router-dom";
import helpers from "../../helpers/routesFront.js";
import Footer from "../../components/footer/Footer.js";
import style from "./SignIn.module.sass";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import decodeJwt from "../../../utils/decodeJwt.js";
import { useState } from "react";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

interface FormLogIn {
  fullName: string;
  email: string;
  password: string;
}

const initialValues: FormLogIn = {
  fullName: "",
  email: "",
  password: "",
};

function SignIn() {
  const [email, setEmail] = useState<string | null>(null);

  function handleError() {
    alert("Usuario o contraseña incorrectos");
  }

  function handleSuccess(
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) {
    console.log("Credentialresponse", response);
    if ("credential" in response && typeof response.credential === "string") {
      const { payload } = decodeJwt(response.credential);
      console.log("payload credential", payload);
      setEmail(payload.email);
    }
  }

  return (
    <div className={style.background}>
      <div className={style.marginContainer}>
        <div className={style.logoWrapper}>
          <h1 className={style.logo}>MyStockify</h1>
        </div>
        <div className={style.quoteWrapper}>
          <h2 className={style.quote}>
            “Tu inventario, tu <span className={style.strong}>control</span>{" "}
            total”
          </h2>
          <h3 className={style.slogan}>
            Simplificando la gestión de stock para tu éxito.
          </h3>
        </div>
        <div className={style.logInWrapper}>
          <div className={style.form}>
            <h2 className={style.titleForm}>Crear Cuenta</h2>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => console.log(values)}
              validationSchema={SigninValidationSchema}
            >
              {() => {
                return (
                  <Form className={style.formik}>
                    <FormikInput
                      name="fullName"
                      label="Nombre"
                      placeholder="Nombre  y Apellido"
                    ></FormikInput>
                    <FormikInput
                      name="email"
                      label="Email"
                      placeholder="example@mail.com"
                    ></FormikInput>
                    <FormikInput
                      name="password"
                      label="Contraseña"
                      placeholder="********"
                      securetextentry="true"
                    ></FormikInput>
                    <button type="submit" className={style.submitBtn}>
                      Ingresar
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <div className={style.separator}>
              <div className={style.line}></div>
              <div className={style.letter}>o</div>
              <div className={style.line}></div>
            </div>
            <div className={style.socialApps}>
              <div className={style.google}>
                {email === null && (
                  <GoogleLogin
                    clientId={CLIENT_ID}
                    onFailure={handleError}
                    onSuccess={handleSuccess}
                  />
                )}
                {email && <p>El usuario a iniciado seción: {email}</p>}
              </div>
              <div className={style.facebook}>Facebook</div>
            </div>
          </div>
          <div className={style.questionWrapper}>
            <p className={style.question}>
              ¿Ya tienes una cuenta?
              <Link to={helpers.logIn} className={style.link}>
                {" "}
                Ingresar
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className={style.footerWrapper}>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
