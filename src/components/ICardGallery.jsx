import React from 'react'
import { useState } from 'react'
import ICard from './ICard'

function ICardGallery() {
const student=[{
    college:'ABES Engineering College',
    roll:'20909',
    name:'Ram',
    branch:'CSE-24'
},
{
    college:'ABES Engineering College',
    roll:'898989',
    name:'Vikash',
    branch:'CSE-24'
},
{
    college:'ABES Engineering College',
    roll:'454545',
    name:'Vansh',
    branch:'CSE-24'
},
{
    college:'ABES Engineering College',
    roll:'898989',
    name:'Rahul',
    branch:'CSE-24'
}


]

  return (
    <div>
        {/* <ICard college="ABES Engineering College" roll="676790" name="Ram" branch="CSE" />

        <ICard college="ABES Engineering College" roll="69090" name="Vansh" branch="CSE" />
<ICard college="ABES Engineering College" roll="78878" name="Ansh" branch="CSE" />
<ICard college="ABES Engineering College" roll="8989" name="kamini" branch="CSE" /> */}

{/* <ICard data={student[0]} /> */}


{

    student.map((ele)=>(
       <ICard data={ele} />
    ))
}
    </div>
  )
}

export default ICardGallery