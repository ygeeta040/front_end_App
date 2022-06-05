import React, {useState, useEffect } from 'react'



const CleanUp = () => {

    const [width, setwidth] = useState(window.screen.width);


    const actuallWidth =()=>{
        setwidth(window.innerWidth)
    }

    useEffect(()=>{
     window.addEventListener("resize", actuallWidth);

    return()=>{
        window.removeEventListener("resize", actuallWidth);
    }

    })



  return (
    <div>
        <h1>My screen size</h1>
        <h3> {width} </h3>
    </div>
  )
}

export default CleanUp;