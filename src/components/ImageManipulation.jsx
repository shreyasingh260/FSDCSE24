import React, { useState } from 'react'
import cat from '../images/cat.png';
function ImageManipulation() {
    const[catHeight,setCatHeight]=useState(200)
    const[catWidth,setCatWidth]=useState(200)
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0)

    function increaseHeight(){
        setCatHeight(catHeight+10);
    }

    function increaseWidth(){
        setCatWidth(catWidth+10);
    }


    function chnageBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
  return (
    <div>
        <h2>ImageManipulation</h2>

     <div style={{backgroundColor:`rgb(${red},${green},${blue})`,height:'400px', width:'400px',border:'4px solid red', marginLeft:'300px'}}>
     <img src={cat} height={catHeight} width={catWidth} />
     </div>
     <div>
        <button onClick={increaseHeight}>increaseHeight</button>
        <button onClick={increaseWidth}>increaseWidth</button>
        <button onClick={chnageBGColor}>ChangeBGColor</button>
        
     </div>

    </div>
  )
}

export default ImageManipulation