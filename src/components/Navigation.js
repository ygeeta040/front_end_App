import React from 'react'
import { Link } from 'react-router-dom';
import  img1 from'../images/logo.jpg';
import  img2 from'../images/cart.png';
const Navigation = () => {

const cartStyle= {
  background: 'orange',
  display: 'flex',
  padding: '6px 12px',
  borderRadius: '50px'
}

  return (
    <>
  <nav className='container mx-auto flex items-center justify-between  py-4'>
    <Link to='/'>
      <img style={{height:85}} src={img1} alt='logo'/>
    </Link>
    <ul className='flex items-center'>
      <li><Link to='/'>Home</Link></li>
      <li   className=" ml-6"><Link to='/Product'>Product</Link></li>
      {/* <li   className=" ml-6"><Link to='/Cart'>Cart</Link></li> */}
      <li   className=" ml-6">
        <Link to='/cart'>
          <div  style={cartStyle}>
            <span>10</span>
            <img className='ml-2' style={{height:30}} src={img2} alt='cart'/>
          </div>
        </Link>
      </li>
    </ul>

  </nav>
    </>
  )
}

export default Navigation;