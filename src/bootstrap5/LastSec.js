import React from 'react'
import { Link } from 'react-router-dom';

const LastSec = () => {
  return (
   <>
   <section className='offer_style my-5 py-2'>
       <div className='container-fluid'>
           <div className='row'>
               <div className='col-xxl-12 col-12 py-5 text-center'>
                   <h1 className='text-white my_paar1'>Check out my videos</h1>
                   <p>Never give up on something that you can't go a day without thinking about...!!!</p>
                   <Link to="https://getbootstrap.com/docs/5.2/getting-started/introduction/">
                   <button  type='button' className='btn btn-outline-light' data-toggle="tooltip" data-placement="right" title="who i i'm">Check more..</button></Link>
               </div>
           </div>
       </div>
   </section>
   </>
  )
}

export default LastSec;