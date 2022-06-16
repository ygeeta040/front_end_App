import React, { useState, useEffect } from 'react'
import img31 from '../images/a1.jpg';

const Gallery = () => {

    const [user, setuser] = useState([]);
    const[loading, setLoading]=useState(true);

    const getUsers =async () =>{
        
        try{
            setLoading(false);
            const response = await fetch ("https://api.github.com/users");
        setuser(await response.json());
        }
        catch(err){
            console.log("my error is" + err);
        }
    }

    useEffect(()=>{
        getUsers();
    }, [])

// if(loading){
//     return <Loading/>
    
// }

  return (
    <>
    <section className='my-5'> 
        <div className='text-center '>
            <h1 className='display-4'>Gallery</h1>
            <hr className='w-25  mx-auto' />
        </div>
        <div className='container my-5'>
            <div className='row gy-4'>

            {
                user.map((cuTT)=>{
                    return(
                        <>
                        <div className='col-lg-2 col-md-2 col-12 col-xxl-2 '>
<figure>
    <img src={ cuTT.avatar_url} alt="img11"></img>
</figure>
</div>

                        </>
                    )
                })
            }
                            
            </div>
        </div>
    </section>
    </>
  )
}

export default Gallery;

