import { Link } from "react-router-dom";
import ContextContainer from "../../Layout/ContextContainer";
import Input from "../Input";
import ButtonForm from "../ButtonForm";
import style from "./LoginForm.module.css";

function LoginForm() {
  return (
    <div>
      <h1 className={style.headerForm}>Login</h1>
      <form className={style.loginForm}>
        <Input
          name="username"
          placeholder="johndoe"
          text="Digite seu usuário"
          type="text"
        />
        <Input
          name="password"
          placeholder="********"
          text="Digite sua senha"
          type="text"
        />
        <ButtonForm text="Login"></ButtonForm>
        <p>
          Ainda nao tem uma conta? <Link to="/players">Registre-se</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
