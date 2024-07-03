import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Components/Header'

import Footer from './Components/Footer'
import Home from './Components/Home'
import About from './Components/About'
import Menu from './Components/Menu'
import SignIn from './Components/SignIn'




function App() {

  const [count,setcount] = useState(0)

  const handlecount=()=>{
    setcount(count+1)
  }
  

  return (
  
     <>
     <div>
      <BrowserRouter>
    <Header count={count}/>
    <Routes>
      <Route path="/" element={<Home handlecount={handlecount} />}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Menu" element={<Menu handlecount={handlecount}/>}/>
      <Route path="/SignIn" element={<SignIn/>} />
   
    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    </>
   
  )
}

export default App
