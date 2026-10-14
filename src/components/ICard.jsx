import React from 'react'
import pic from '../images/cat.png'
function ICard({data}) {
  return (
    <div style={{border:'10px solid red', height:'250px', width:'200px'}}>
    <h2>College:{data.college}</h2>
    <div>
      <img src={pic} height={200} width={200}></img>
    </div>
    <h2>Roll:{data.roll}</h2>
    <h2>Name:{data.name}</h2>
    <h2>Branch:{data.branch}</h2>

    </div>
  )
}

export default ICard