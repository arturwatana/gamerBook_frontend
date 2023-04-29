type InputType = {
  name: string;
  type: string;
  text: string;
  handleOnChange?: any;
  placeholder: string;
};

import style from "./Input.module.css";

function Input({ text, name, handleOnChange, type, placeholder }: InputType) {
  return (
    <div className={style.inputForm}>
      <label>{text}</label>
      <input
        type={type}
        name={name}
        onChange={handleOnChange}
        id={name}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default Input;
