// import React, { useState } from 'react'
// import { FaCartShopping } from "react-icons/fa6";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from 'react-router-dom';

// const Header = ({count}) => {
//     const [state,setstate] = useState(false)
//   return (
//     <div className='flex justify-between text-[18px] py-5 px-6 font-medium border-b-2 drop-shadow '>
//       <div>
//         <p>yumi<span className='text-[#fbc531]'>Food</span></p></div>
//       <div className=' ' >
       
//         <ul className='sm:flex gap-5 cursor-pointer  hidden'>
//           <Link to={"/"}>
//             <li className='hover:text-[#fbc531]'>Home</li>
//             </Link>
//           <Link to={"/About"}>
//             <li className='hover:text-[#fbc531]'>Aboutus</li>
//             </Link>
//           <Link to={"/Menu"}>
//             <li className='hover:text-[#fbc531]'>Menu</li>
//             </Link>
//           <Link to={"/SignIn"}>
//             <li className='hover:text-[#fbc531]'>Sign IN</li>
//             </Link>
        
//         </ul>
//       </div>
//       {
//         state?(
//             <div className='bg-[#f5f6fa] fixed  w-60 h-[100vh] flex items-center justify-center top-0 right-0 z-50'>
// <p className='absolute top-2 right-2 '> <RxCross2 size={30} onClick={()=>setstate(!state)}/></p>
// <ul className='flex gap-14 cursor-pointer  flex-col  '>
// <Link to={"/"}>
//             <li className='hover:text-[#fbc531]'>Home</li>
//             </Link>
//           <Link to={"/About"}>
//             <li className='hover:text-[#fbc531]'>Aboutus</li>
//             </Link>
//           <Link to={"/Menu"}>
//             <li className='hover:text-[#fbc531]'>Menu</li>
//             </Link>
//           <Link to={"/SignIn"}>
//             <li className='hover:text-[#fbc531]'>Sign IN</li>
//             </Link>
        
      
// </ul>
// </div>
//         ):""
//       }
//       <div className='flex gap-5 cursor-pointer'>
//         <p className='sm:hidden block'> 
//         <GiHamburgerMenu size={30} 
//         onClick={()=>setstate(!state)}/>
//         </p>
//         <h1>{count}</h1>
//         <p><FaCartShopping size={30}/></p>
//       </div>
//     </div>
//   )
// }

// export default Header


{/* <div className='bg-[#f5f6fa] absolute w-60 h-[100vh] flex items-center justify-center top-0 right-0'>
<p className='absolute top-2 right-2'> <RxCross2 size={30} /></p>
<ul className='flex gap-14 cursor-pointer  flex-col '>
    <li>Home</li>
    <li>Aboutus</li>
    <li>Offers</li>
    <li>Sign IN</li>
</ul>
</div> */}
import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Header = ({ count }) => {
  const [state, setstate] = useState(false);

  return (
    <div className='w-full justify-between bg-white fixed top-0 left-0 z-50'>
    <div className='relative z-50 flex justify-between text-[18px] py-5 px-6 font-medium border-b-2 drop-shadow '>
      <div>
        <p>yumi<span className='text-[#fbc531]'>Food</span></p>
      </div>
      <div className='hidden sm:flex gap-5 cursor-pointer'>
        <Link to={"/"}>
          <li className='hover:text-[#fbc531] list-none'>Home</li>
        </Link>
        <Link to={"/About"}>
          <li className='hover:text-[#fbc531] list-none'>Aboutus</li>
        </Link>
        <Link to={"/Menu"}>
          <li className='hover:text-[#fbc531] list-none'>Menu</li>
        </Link>
        <Link to={"/SignIn"}>
          <li className='hover:text-[#fbc531] list-none'>Sign IN</li>
        </Link>
      </div>
      {state && (
        <div className='bg-[#f5f6fa] fixed w-60 h-[100vh] flex items-center justify-center top-0 right-0 z-50'>
          <p className='absolute top-2 right-2'>
            <RxCross2 size={30} onClick={() => setstate(!state)} />
          </p>
          <ul className='flex gap-14 cursor-pointer flex-col'>
            <Link to={"/"}>
              <li className='hover:text-[#fbc531]'>Home</li>
            </Link>
            <Link to={"/About"}>
              <li className='hover:text-[#fbc531]'>Aboutus</li>
            </Link>
            <Link to={"/Menu"}>
              <li className='hover:text-[#fbc531]'>Menu</li>
            </Link>
            <Link to={"/SignIn"}>
              <li className='hover:text-[#fbc531]'>Sign IN</li>
            </Link>
          </ul>
        </div>
      )}
      <div className='flex gap-5 cursor-pointer'>
        <p className='sm:hidden block'>
          <GiHamburgerMenu size={30} onClick={() => setstate(!state)} />
        </p>
        <h1>{count}</h1>
        <p><FaCartShopping size={30} /></p>
      </div>
    </div>
    </div>
  );
};

export default Header;




