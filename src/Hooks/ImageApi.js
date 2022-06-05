import React,{ useState,  useEffect } from 'react'



const ImageApi = () => {

const [imgApi, setimgApi]=useState([]);

const getImageApi =()=>{
    fetch('https://api.unsplash.com/photos/?client_id=WNuigD5-1m9VZEgiqnb80bgSMOMlmGg3D4Y6cJlD6dI')
  .then(response => response.json())
  .then((json)=>{
      console.log(json)
      setimgApi(json)
  })
}

useEffect(()=>{
    getImageApi();
})

  return (
    <div>
{imgApi.map(curr=>{
<>
<p>{curr.instagram_username}</p>

<img src="..." class="rounded float-start" alt="..."/>
<img src="..." class="rounded float-end" alt="..."/>
</>

})}

    </div>
  )
}

export default ImageApi;