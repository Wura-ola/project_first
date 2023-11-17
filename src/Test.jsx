import React from "react";
import BioData from "./components/BioData";
import { Age, Hobbies } from "./components/Hobbies";
import { Food } from "./components/Food";

function Test() {
  return (
    <div>
      <BioData />
      <Hobbies />
      <Food />
      <Age />
    </div>
  );
}

export default Test;
