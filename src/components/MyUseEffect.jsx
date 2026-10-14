import React, { useState, useEffect } from "react";

function MyUseEffect() {
  const [counter, setCounter] = useState(0);
  const [pointer, setPointer] = useState(100);
function increaseCounter() {
    setCounter(counter + 10);
  }
  function decreasePointer(){
    setPointer(pointer - 5);
  }
  useEffect(() => {
    // console.log("Hii..using useEffect hook");
    console.log("Counter value is: ", counter)
    console.log("Pointer value is: ", pointer)
  },[counter,pointer]);

  return (
    <div>
      <h2>Counter app:</h2>
      <h1 style={{color:'red'}}>Counter value={counter}</h1>
      <h1 style={{color:'green'}}>Pointer value={pointer}</h1>
      <button onClick={increaseCounter}>counter</button>
      <button onClick={decreasePointer}>pointer</button>
    </div>
  );
}

export default MyUseEffect;