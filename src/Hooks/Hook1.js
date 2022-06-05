
import React, {useState} from 'react'


const Hook1 = () => {

const [myName, setMyname]= useState("geeta");

const ChangeName=()=>{
  
 let val =  myName;

 if(val==="geeta"){
   setMyname("arti");
 }
 else{
  setMyname("geeta");
 }
 
}


  return (
    <div>
      <h1>{myName}</h1>
      <button style={{backgroundColor:"blue"}} onClick={ChangeName}>ChangeName</button>
    </div>
  )
}

export default Hook1;