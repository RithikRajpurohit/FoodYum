import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import Food from './Food'

const Home = ({handlecount}) => {
  return (
    <>
    <div>
        <Hero/>
        <Delivery/>
        <Food handlecount={handlecount}/>
    </div>
    </>
  )
}

export default Home
