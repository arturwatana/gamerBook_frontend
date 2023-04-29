import style from "./ButtonForm.module.css";

type btnType = {
  text: string;
};

function ButtonForm({ text }: btnType) {
  return <button className={style.btn}>{text}</button>;
}

export default ButtonForm;
