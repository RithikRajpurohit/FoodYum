import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='w-[full] bg-black text-white ' >
      <div className='grid grid-cols-2 md:grid-cols-4 py-8 px-10 mr-2 '>
        <div>
            <h2>Yumi<span className='text-[#fbc531]'>Food</span></h2>
            <p >© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div>
            <h2>Company</h2>
            <p>About</p>
            <p>Team</p>
            <p>yumifood one</p>
            <p>Careers</p>
            <p>Instamart</p>
        </div>
    <div>
        <h2>Contact us</h2>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us </p>
            <p>Cookie Policy  </p>
            <p>Terms & Conditions</p>
        </div>
        <div>
            <h2>We deliver to:</h2>
            <p>Madurai</p>
            <p>Bangalore</p>
            <p>Gurgaon</p>
            <p>Hyderabad</p>
            <p>Mumbai</p>
            <p>Delhi</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
