import React from 'react'
import img11 from '../images/a1.jpg'
const About = () => {
  return ( 
    <>

   <section>
      <div className='main_heading my-5'>
        <div className='text-center'>
        <h1 className='display-4'>About Us</h1>
        <hr className='w-25 m-auto'/>
    </div>
<div className='container my-5'>
  <div className='row'>
    <div className='col-lg-6 col-md-6 col-12 col-xxl-6'>
      <figure>
        <img src={img11} className="img-fluid about_img" alt='img'/>
      </figure>
    </div>
    <div className='col-lg-6 col-md-6 col-12 col-xxl-6 >
    d-flex justify-content-around align-items-start flex-column'>
      <h1 className='display-4'>My Web</h1>
      <p className='para'>Loremfa-rotate-180Loremfa-rotate-270Loremfa-rotate-180Loremfa-rotate-270Loremfa-rotate-180Loremfa-rotate-270
      Loremfa-rotate-180Loremfa-rotate-270 Loremfa-rotate-180Loremfa-rotate-270 Loremfa-rotate-180Loremfa-rotate-270
      Loremfa-rotate-180Loremfa-rotate-270Loremfa-rotate-180Loremfa-rotate-270 </p>
      <button type='button' className='btn btn-outline-info' data-toggle="tooltip" data-placement="right" title="who i i'm">Check more..</button>
    </div>
  </div>
</div>
    </div>
    
   </section>
    </>
  )
}

export default About;