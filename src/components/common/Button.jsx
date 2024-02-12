import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.classNameBtn}
      name={props.nameBtn}
      type={props.typeBtn}
      value={props.valueBtn}
      onClick={props.onClickBtn}
    >
      {props.children}
    </button>
  );
};

export default Button;
