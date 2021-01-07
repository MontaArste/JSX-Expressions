import React from "react";
import ReactDOM from "react-dom";
const fname = "Monta";
const lname = "Arste";
let randomNumber = Math.floor(Math.random() * 10) + 1;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {randomNumber}.</p>
  </div>,
  document.getElementById("root")
);
//<h1>Hello {fname} {(lname)}!</h1>
//<h1>Hello {fname+" "+(lname)}!</h1>
