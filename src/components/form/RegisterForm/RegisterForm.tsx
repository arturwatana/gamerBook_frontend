import { Link } from "react-router-dom";
import Input from "../Input";
import style from "./RegisterForm.module.css";
import ButtonForm from "../ButtonForm";
function RegisterForm() {
  return (
    <div>
      <h1 className={style.headerForm}>Cadastre-se</h1>
      <form className={style.form}>
        <Input
          name="name"
          type="text"
          placeholder="John Doe"
          text="Insira seu nome:"
        />
        <Input
          name="age"
          type="number"
          placeholder="27"
          text="Insira sua idade:"
        />
        <Input
          name="email"
          type="text"
          placeholder="john.doe@gmail.com"
          text="Insira seu email:"
        />
        <ButtonForm text="Cadastre-se" />
        <p>
          Já possui uma conta? Faca o <Link to="/login">login</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
