import React from "react";

function Button(props) {
  return (
    <button className="bg-red-500 text-white px-10 py-5">{props.text}</button>
  );
}

export default Button;
