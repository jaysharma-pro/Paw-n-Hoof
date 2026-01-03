import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Herosec from '../Components/Herosec.jsx'
import Subsec from '../Components/Subsec.jsx'
import Footer from '../Components/Footer.jsx'
import Adopt from '../Components/Adopt.jsx'
import ContactUs from '../Components/ContactUs.jsx'
import Login from '../Components/Login.jsx' 

function Home() {
  return (
    <>
      <Navbar />
      <Herosec />
      <Subsec />
      <Adopt />
      <Login />
      <ContactUs />
      <Footer />
      
    </>
  )
}

export default Home
