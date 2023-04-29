import style from "./ContextContainer.module.css";

type ContextContainerType = {
  children: any;
};

function ContextContainer(props: ContextContainerType) {
  return (
    <div className={style.contextContainer}>
      <div className={style.content}>{props.children}</div>
    </div>
  );
}

export default ContextContainer;
