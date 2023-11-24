import React from "react";
import BioData from "./components/BioData";
import { Age, Hobbies } from "./components/Hobbies";
import { Food } from "./components/Food";
import Header from "./components/header";
import Footer from "./components/Footer";

function Test() {
  return (
    <div>
      <Header />
      <BioData />
      <Hobbies />
      <Food />
      <Age />
      <Footer />
    </div>
  );
}

export default Test;
