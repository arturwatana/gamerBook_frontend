type ContainerType = {
  children: any;
  customClass: string;
};
import style from "./Container.module.css";

function Container(props: ContainerType) {
  return (
    <div className={`${style.container} ${style[props.customClass]}`}>
      {props.children}
    </div>
  );
}

export default Container;
