import React, { useState } from 'react'

const Dumi = () => {

const [fullName, setFullName]=useState({
    fname: '',
    lname: '',
});


const inputItemss1=(e)=>{
    console.log(e.target.value)
    
    console.log(e.target.name)

    const value = e.target.value;
    const name = e.target.name;

    setFullName((preValue)=>{
//   console.log(preValue);
if(name === 'fName'){
    return{
        fname: value,
    lname: preValue.lname,
    }

}else if(name === 'lName'){
    return{
        fname: preValue.fname,
    lname: value,
    }

}

    })

}


const onSubmites =(e)=>{
    e.preventDefault();
    alert('form submitted');
  
}
  return (
    <>
    <form onSubmit={onSubmites}>
        <header>
            <div>
                <h1> {fullName.fname} {fullName.lname} </h1>
                <input type="text" 
                placeholder="enter your name"
                name='fName'
                onChange={inputItemss1}
                value={fullName.fname}
                />
                <input type="text" 
                placeholder="enter your Password"
                name='lName'
                onChange={inputItemss1}
                value={fullName.lname}
                />
   
                <button type='submit'>CLICK ME</button>
            </div>
        </header>
    </form>
    </>
  )
}

export default Dumi;