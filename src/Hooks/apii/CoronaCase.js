import React, {useState, useEffect} from 'react'


const CoronaCase = () => {

  const [data, setData]=useState([])

 const getApiusers =()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((json)=>{
    console.log(json);
    setData(json);
  })

 }

useEffect(()=>{
  getApiusers();
})

  return (
//     <div>
// my api<br/>
// <button onClick={getApiusers}>Fetch Api</button><br/>
// {/* <pre> {JSON.stringify(data, null, 2)} </pre> */}

// <div>
//   <ul>
//     {data.map(item=>
//       <li> {item.title} </li>
//     )}
//   </ul>
// </div>
//     </div>
<>


<div className='profile-area'>
            <div className='container'>
                <div className='row'>
                    
                    {
                        data.map((currElem)=>{
                            return(
                                <>
                                  <div className='col-md-4'>
                            <div className='card'>
                            <div className='img2'><img src="https://www.betterteam.com/images/principal-software-engineer-job-description-4088x2727-20201126.jpeg?crop=4:3,smart&width=1200&dpr=2" alt='imgg'/></div>
                            <div className='img3'><img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_a_software_engineer.jpg" alt='imggg'/></div>
                            <div className='main-text'>
                            <h2>{currElem.id}</h2>
                            {/* <h2>{currElem.userId}</h2> */}
                            <p>{currElem.title}</p>
                            <h2>{currElem.body}</h2>
                            
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

export default CoronaCase;