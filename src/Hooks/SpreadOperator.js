import React, { useState } from 'react'


const SpreadOperator = () => {
  
const bioDatas=[
  {
  id: 0, myname:"geetaa", age:222
},
{
  id: 1, myname:"geetaa", age:222
},



]


const [clear, setclear] = useState(bioDatas)


const rmoveData=(id)=>{
alert(id);

const newElem=clear.filter((curr)=>{
  return curr.id !==id;
})
setclear(newElem);
}


  return (
    <div>
      
        {clear.map((curr)=>{
          return(
            <>
            <h1> {curr.id} {curr.myname} {curr.age}  
               <button style={{backgroundColor:"blue"}} onClick={() => rmoveData(curr.id)}>DELETE</button> </h1>
         
           
            </>
          )
        })}
  
    </div>
  )
}

export default SpreadOperator;