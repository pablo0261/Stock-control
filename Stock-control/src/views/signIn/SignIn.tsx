import { FunctionComponent, useState } from 'react';
import { Form, Formik } from 'formik';
import FormikInput from '../../components/formik/FormikInput';
import SigninValidationSchema from './SignInValidation';
import { Link } from 'react-router-dom';
import helpers from '../../helpers/routesFront';
import Footer from '../../components/footer/Footer';
import style from './SignIn.module.sass';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from '@leecheuk/react-google-login';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

interface GoogleSignInComponentProps {
  loginSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
}

interface CustomGoogleButtonProps {
  onClick: () => void;
  loginSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
  loginFailure: () => void;
}

interface FormLogIn {
  fullName: string;
  email: string;
  password: string;
}

const initialValues: FormLogIn = {
  fullName: '',
  email: '',
  password: '',
};

export const SignIn: FunctionComponent<GoogleSignInComponentProps> = ({
  loginSuccess,
}) => {
  const [loginFailed, setLoginFailed] = useState<boolean>(false);

  const handleGoogleLogin = () => {
    setLoginFailed(false); 
  };

  const handleLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    loginSuccess(response);
  };

  const handleLoginFailure = () => {
    setLoginFailed(true);
  };

  return (
    <div className={style.background}>
      <div className={style.marginContainer}>
        <div className={style.logoWrapper}>
          <h1 className={style.logo}>MyStockify</h1>
        </div>
        <div className={style.quoteWrapper}>
          <h2 className={style.quote}>
            “Tu inventario, tu <span className={style.strong}>control</span> total”
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
              {() => (
                <Form className={style.formik}>
                  <FormikInput
                    name="fullName"
                    label="Nombre"
                    placeholder="Nombre y Apellido"
                  />
                  <FormikInput
                    name="email"
                    label="Email"
                    placeholder="example@mail.com"
                  />
                  <FormikInput
                    name="password"
                    label="Contraseña"
                    placeholder="********"
                    securetextentry="true"
                  />
                  <button type="submit" className={style.submitBtn}>
                    Ingresar
                  </button>
                </Form>
              )}
            </Formik>
            <div className={style.separator}>
              <div className={style.line}></div>
              <div className={style.letter}>o</div>
              <div className={style.line}></div>
            </div>
                {loginFailed && <p>Could not sign you in! Try again</p>}
            <div className={style.socialApps}>
              <div className={style.google}>
                <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Google"
              onSuccess={handleLoginSuccess}
              onFailure={handleLoginFailure}
              onClick={handleGoogleLogin}
              cookiePolicy="single_host_origin"
              responseType="code,token"
            />
              </div>
              <button className={style.facebook}>
                Facebook
              </button>
            </div>
          </div>
          <div className={style.questionWrapper}>
            <p className={style.question}>
              ¿Ya tienes una cuenta?
              <Link to={helpers.logIn} className={style.link}>
                Ingresar
              </Link>
            </p>
          </div>
        </div>
        <div className={style.footerWrapper}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
