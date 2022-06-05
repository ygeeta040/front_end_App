import React, { useState } from 'react'


const Foms = () => {

const [email, setemail] = useState("")
const [password, setpassword] = useState("")

  return (
    <div>
        <form >
            <div >
                <label htmlFor='email' style={{backgroundColor:"lightgreen"}}>Email</label>
                <input type="text" name="email" id="email" autoComplete="off" value={email} 
                style={{backgroundColor:"lightgreen"}}
                onChange={(e)=>setemail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='password' style={{backgroundColor:"lightgreen"}}>Password</label>
                <input type="password" name="password" id="password" autoComplete="off"
                 value={password} style={{backgroundColor:"lightgreen"}}  
                  onChange={(e)=>setpassword(e.target.value)}
                  />
                     
                 
            </div>
        </form>
    </div>
  )
}

export default Foms;