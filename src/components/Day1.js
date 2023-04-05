import React from "react";

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
export default function D1() {
  return (
    <div className="da1">
    <button id="b1" onClick={alertBox}>Click Me</button>
    <button id="b1" onClick={console_}>Click Me</button>
    <button id="b1" onClick={check}>click me</button>
    </div>
  )
}