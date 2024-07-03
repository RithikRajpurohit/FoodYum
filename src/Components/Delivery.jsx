import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full py-16 px-4'>
      
        <h2 className='text-[#fbc531] font-bold text-2xl text-center'>Quick Delivery App</h2>
      
      <div className='grid grid-cols-2 w-[70%] mx-auto my-10 '>
        <img 
        src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
        alt='app '
        className='w-[550px]'/>
        <div className='flex flex-col justify-center '>
            <h4 className='text-[22px] md:text-[30px] text-[green] font-bold'>Get The App</h4>
            <h1 className=' text-[22px] md:text-5xl py-2 font-bold'>The Fastest Food Delivery In India</h1>
            <button className='w-[100px] mt-[22px] py-[10px] text-[15px] hover:text-[#fbc531] bg-black text-[white] font-bold rounded-lg '>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery
