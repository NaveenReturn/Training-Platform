import React from 'react'

const Footer = () => {
  return (
    <div className='footer py-4 px-4'>
        <div className='left-site'>
             <h2 className='py-2'>Follow Us</h2>
             <p>Facebook</p>
             <p>Instagram</p>
             <p>Twitter</p>
             <p>Linkedin</p>
             <p>E Mail</p>
        </div>
        {/* center */}
        <div className='center-site'>
             <h2 className='py-2'>Quick Links</h2>
             <p>Home</p>
             <p>FAQ</p>
             <p>Career</p>
             <p>Contact Us</p>
        </div>
        {/* right */}
        <div className='right-site'>

             <h2 className='py-2'>Courses</h2>
             <p>Front End Development</p>
             <p>Back End Development</p>
             <p>Python Development</p>
             <p>Full-Stack Development</p>
             <p>UIUX Design</p>
        </div>
        {/* address */}
        <div className='address-details'>
             <h2 className='py-2'>Address</h2>
             <p>Coding Geekz Technologies, 1st Floor,</p>
             <p>Mangalam Road, Old Bus Stand Back side,</p>
             <span><i class="fa-solid fa-phone"></i> :  7904732443</span>
        </div>
    </div>
  )
}

export default Footer