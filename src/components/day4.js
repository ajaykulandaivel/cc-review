 import React, { useState } from 'react';
export default function Day4() {

    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

    function handleChange(event)
    {
        setInput(event.target.value);
    }
    function handleClick()
    {
        setOutput(input);
        setInput("");
    }


  return (
    <div className='day4'>
      <p>ENTER THE FRUIT NAME :</p>
      <label>Name: </label>
    <input type="text" placeholder='Enter the name' onChange={handleChange} value={input} ></input>
      <p>select category</p>
       <select name="fruit"  >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">orange</option>
<option value="fruits">apple</option>
       <option value="fruits">banana</option>
       <option value="fruits">fig</option>
       <option value="fruits">jack</option>
       
       </select>
    
    
    <br></br><button id='button' onClick={handleClick} >SUBMIT</button>
    <h1>Hello {output}</h1>  
    </div>
  )
}