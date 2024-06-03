/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoidx = Math.floor(Math.random() * who.length);
  let actionidx = Math.floor(Math.random() * action.length);
  let whatidx = Math.floor(Math.random() * what.length);
  let whenidx = Math.floor(Math.random() * when.length);

  return (
    who[whoidx] +
    " " +
    action[actionidx] +
    " " +
    what[whatidx] +
    " " +
    when[whenidx]
  );
};
