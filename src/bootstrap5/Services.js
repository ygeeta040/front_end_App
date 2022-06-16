import React from 'react'
import img33 from '../images/a1.jpg';

const Services = () => {
  return (
  <>
  <section className='bg-light pb-4 my-5'>
    <div className='text-center my-4'>
      <h1 className='display-4'>Our Services</h1>
      <hr className='w-25 mx-auto' />
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-12 col-xxl-4 mx-auto'>
        <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4 myimg">
      <img src={img33} className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-4 col-12 col-xxl-4 mx-auto'>
        <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4 myimg">
      <img src={img33} className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className='col-lg-4 col-md-4 col-12 col-xxl-4 mx-auto'>
        <div className="card mb-3" style={{maxWidth: 540}}>
  <div className="row g-0">
    <div className="col-md-4 myimg">
      <img src={img33} className="img-fluid" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        </div>
        <div className='col-xxl-12  text-center'>
        <button type='button' className='btn btn-outline-info' data-toggle="tooltip" data-placement="right" title="who i i'm">Check more..</button>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}

export default Services;