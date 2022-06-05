import React, { useState } from 'react'


const Arrayhooks = () => {

    const bioData =[
        {
            id: 1, name:"geeta", age:2
        },
        {
            id: 1, name:"geeta", age:22
        },
        {
            id: 1, name:"geeta", age:22
        },
        {
            id: 1, name:"geeta", age:2
        },
        {
            id: 1, name:"geeta", age:22
        },
        {
            id: 1, name:"geeta", age:22
        },
    ]

const [dlt, setdlt] = useState(bioData)

const clearData=()=>{
    setdlt([]);

}


    return(
        <>
        {
            dlt.map((currEle)=>{
                return(
                    <>
                    <h1>{currEle.id} {currEle.name} {currEle.age} </h1>
                    </>
                )
            })
        }
        <button style={{backgroundColor:'blue'}} onClick={clearData} >clearData</button>
        </>
    )

}
export default Arrayhooks;