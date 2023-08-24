import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
console.log(" hello man ");
const one = [1, 2, 3];
const two = [11, 22, 33, ...one];
const total = two + one;

console.log(two);
const moro = {
  fname: "mo",
  lname: "co",
  addr: "101"
};
const rr = { ...moro, id: 100, emai: "@kikol" };

console.log(rr);
