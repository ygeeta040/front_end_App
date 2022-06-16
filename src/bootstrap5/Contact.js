import React from 'react'
import emailjs from 'emailjs-com';
const Contact = () => {

   const sendEmail=(e)=>{
     e.preventDefault();

     emailjs.sendForm(
       "service_k9mucpq",
        "template_ad1i9yr",
         e.target, 
         "mlhTLdc35FuCM6A3i"
         ).then(res=>{
           console.log(res);

         }).catch(err=>{
           console.log(err);
         })

   }

  return (
    
    <>
    <section className='my-5'>
        <div className='text-center'>
            <h1 className='display-4'>Contact Us</h1>
            <hr className='w-25 mx-auto'/>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-xxl-8 col-10 col-md-8 mx-auto'>
                <form onSubmit={sendEmail}>
                <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="text"  name='name' class="form-control"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="email"  aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  {/* <div className='mb-3'>
  <label className='pr-4'>Gender</label>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>

  </div> */}
  {/* <div className='mb-3'>
    
  <label for="exampleDataList" class="form-label">Select City</label>
<input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."/>
<datalist id="datalistOptions">
  <option value="San Francisco"/>
  <option value="New York"/>
  <option value="Seattle"/>
  <option value="Los Angeles"/>
  <option value="Chicago"/>
</datalist>
  </div> */}
  {/* <div class="mb-3">
  <label for="formFileSm" class="form-label">Choose file..</label>
  <input class="form-control form-control-sm" name='file' type="file"/>
</div> */}
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Messages..</label>
  <textarea class="form-control" name='message' rows="3"></textarea>
</div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>

    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
    </section>

    
    </>
  )
}

export default Contact;