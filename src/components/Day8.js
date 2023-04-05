import React, { useState, useEffect } from 'react';

function Msg() {
  const [message, setMessage] = useState("Hello,Manoj sir");

  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => {
      setMessage("You are a great trainer!!");
    }, 6000);
  }, []);

  return (
    <center><div>
      <h1>{message}</h1>
    </div></center>
  );
}

export default Msg;