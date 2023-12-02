import React from "react";

function Input(props) {
  return (
    <div>
      <form>
        <label> {props.label}</label>
        <input
          type={props.type ? props.type : "text"}
          placeholder={props.placeholder}
        />
      </form>
    </div>
  );
}

export default Input;
