import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
const Home = ({ isLightMode, onModeToggle}) => { 
  return (
    <>
    <div className="">
      {/* <Navbar isLightMode={isLightMode} onModeToggle={onModeToggle} /> */}
    </div>
    <section className='' id='about'><About/></section>
    
      </>
  )
}

export default Home
