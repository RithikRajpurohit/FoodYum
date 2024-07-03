// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

// const Hero = () => {
//    const [slider,setslider] = useState(0);

//     const imgData =[
//         {
//             url:"https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         },
//         {
//               url:"https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         },
//         {
//               url:"https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         },
//         {
//               url:"https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         },
//         {
//           url:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         },
//          {
//           url:"https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//          },
//          {
//           url:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//          },
//          {
//           url:"https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//          },
//          {
//           url:"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//          }
//     ]


   

//     const handleminus =()=>{
//         setslider(slider==0?imgData.length-1:slider-1)
//     }
//     const handlemiplus =()=>{
//         setslider(slider==imgData.length-1?0:slider+1)

//     }

//     useEffect(()=>{
//      const chanding= setInterval(() => {
//         handlemiplus()
//       },2000);
//       return()=>clearInterval(chanding)
//     },[slider])
    
//   return (
//     <div>
//       <div className='w-[70vw] mx-auto relative my-8 h-[80vh]'>
//         {
//             imgData.map((item,i)=>(
//                 <div key={i} className={`${slider==i?"block":"hidden"}`}>
//                     <img 
//                      src={item.url}
//                      alt=''
//                      className='w-[70vw] h-[72vh] rounded-2xl object-cover'
                    
                    
//                     />
//                 </div>
              
               
//             ))
//         }
//           <div className='w-[70vw] h-[72vh] absolute top-0 right-0 bg-black opacity-50 rounded-xl  mx-auto'></div>
//           <div className=' absolute text-center top-[50%] flex w-[70vw] text-[18px] md:text-3xl justify-center text-white flex-wrap'>
//             <p className='text-white'>Welcome to the world of tasty and fresh good </p>
//           </div>
//           <div className='absolute top-[50%] justify-between w-[70vw] px-5 flex text-white'>
//             <FaAngleLeft 
//             size={35}
//             className='cursor:pointer'
//             onClick={handleminus}/>
//             <FaAngleRight
//             size={35}
//             className='cursor:pointer'
//             onClick={handlemiplus}/>
//           </div>

//       </div>
//     </div>
//   )
// }

// export default Hero
import React, { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Hero = () => {
  const [slider, setslider] = useState(0);

  const imgData = [
    { url: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://plus.unsplash.com/premium_photo-1663852297267-827c73e7529e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { url: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  const handleMinus = () => {
    setslider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  const handlePlus = () => {
    setslider(slider === imgData.length - 1 ? 0 : slider + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handlePlus();
    }, 2000);

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className='relative '>
      <div className='w-[70vw] mx-auto relative my-8 h-[60vh] mt-32'>
        {imgData.map((item, i) => (
          <div key={i} className={`${slider === i ? "block" : "hidden"}`}>
            <img
              src={item.url}
              alt=''
              className='w-[70vw] h-[60vh] rounded-2xl object-cover'
            />
          </div>
        ))}
        <div className='w-[70vw] h-[60vh] absolute top-0 right-0 bg-black opacity-50 rounded-xl mx-auto'></div>
        <div className='absolute top-[50%] flex w-[70vw] text-[18px] md:text-3xl justify-center text-white'>
          <p>Welcome to the world of tasty and fresh food</p>
        </div>
        <div className='absolute top-[50%] justify-between w-[70vw] px-5 flex text-white'>
          <FaAngleLeft
            size={35}
            className='cursor-pointer'
            onClick={handleMinus}
          />
          <FaAngleRight
            size={35}
            className='cursor-pointer'
            onClick={handlePlus}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero

