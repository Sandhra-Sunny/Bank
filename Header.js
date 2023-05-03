import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='banner'>
        <Navbar/>
    <div className='banner_content'>
        <div className='container'>
            <div className='banner_text'>
            <h3>Online Banking</h3>
            <h1>Transesia</h1>
            <p>
           
A secure and user-friendly online banking platform that allows customers to manage their finances and conduct transactions with ease.
            </p>
            <div className='banner_btn'>
                <a href="" className='btn btn-smart'>LOGIN</a>
            </div>
            </div>
        </div>
    </div>


    </div>
  )
}

export default Header