import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='container'>
           <div className='row'>
            <div className='col-6 p-25'>
            <h3>Effortless Cash Deposits</h3> 
           <h1>Convenient Options to Manage Your Finances</h1>
           <p>
           
Our user-friendly online banking platform offers a secure and convenient way to manage your finances, make transactions, and deposit cash without visiting a branch. Enjoy peace of mind knowing your information is protected with advanced encryption and authentication technologies. Join us today and experience the ease of online banking.
           </p>
           <div className='about_btn'>
            <a href='' className='btn btn-smart'>CASH DEPOSIT</a>
           </div>
            </div>
            <div className='col-6'>
            <div className='about_img'>
    <img src="/images/bank5.jpg" alt='about'/>
</div>
            </div>
           </div>
        </div>

    </div>
  )
}

export default About