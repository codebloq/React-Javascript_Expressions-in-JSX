import React from "react";
import ReactDOM from "react-dom";

const fName = "lawyer";
const lName = "Who";

//Insert JS Code inside HTML Element inside JS File
//Cannot write JS statements inside the Element
//Adding/rendering 2 consts in the H1 using string interpolation(template literals)
ReactDOM.render(
  <div>
    <h1>
      Hello! I'm the {`${fName} ${lName}`}, pleased to make your acquaintance.
    </h1>
    <p>
      Over here I'm writing a mathematical expression using JavaScript and the
      solution value is {Math.floor(Math.random() * 10)}.
    </p>
  </div>,
  document.getElementById("root")
);
