import { FormEvent, ChangeEvent, useState } from "react";

type Tpassword = {
  showPassword: boolean;
};

type Tvisibility = {
  signInView: boolean;
};

export const useForm = <T extends object>(initState: T) => {
  //*La T significa que es de tipo GENERICO

  const [formulario, setFormulario] = useState(initState);
  const [showPassword, setShowPassword] = useState<Tpassword>({
    showPassword: false,
  });
  const [signInView, setSignInView] = useState<Tvisibility>({
    signInView: false,
  });

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado:", formulario);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  const handleFormsVisibility = () => {
    setSignInView((prevState) => ({ signInView: !prevState.signInView }));
  };

  return {
    formulario,
    handleChange,
    handleSubmit,
    showPassword,
    handleTogglePassword,
    signInView,
    handleFormsVisibility,
    ...formulario,
  };
};
