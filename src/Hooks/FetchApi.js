import React,  { useState, useEffect } from 'react'
import Loading from './Loading';
import HomeNavigation from '../bootstrap5/HomeNavigation';

import './FetchApi.css';

const FetchApi = () => {

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

if(loading){
    return <Loading/>
    
}


  return (
<>
<HomeNavigation/>
<h1  className="headinds">Get Github Users from API</h1>
        <div className='profile-area'>
            <div className='container'>
                <div className='row'>
                    
                    {
                        user.map((currElem)=>{

                            // const {url, id, login, avatar_url}=currElem;
                            return(
                                <>
                                  <div className='col-md-4 key={id}'>
                            <div className='card'>
                            <div className='img2'><img src={ currElem.avatar_url} alt='imgg'/></div>
                            <div className='img3'><img src={ currElem.avatar_url} alt='imgg'/></div>
                            <div className='main-text'>
                            <h2>{currElem.id}</h2>
                            <h2>{currElem.login}</h2>
                             <h3> <strong>{currElem.type}</strong> </h3>
                             <div class="container">
  <div className='grid'><div class="row" >
    <div class="col">
      Actions
      <br/><p>38</p>
    </div>
    
    <div class="col">
      Followes
      <br/><p>380</p>
    </div>
    <div class="col">
      Rating
      <br/><p>8.9</p>
    </div>
  </div></div>
</div>
                            
                        </div>
                        </div>
                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </div>
</>
    
  )
}

export default FetchApi;




// https://jsonplaceholder.typicode.com/photos