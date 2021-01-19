import React, { useState } from 'react'
import Header from './components/Header'
import './App.css'
import IntroPage from './components/IntroPage'
import Footer from './components/Footer'
import PreFooter from './components/PreFooter'
import Services from './components/Services'
import Navbar from './components/Navbar'

function App() {

  const[showNav, setShowNav] = useState(false)

  const toggleNav = (value) => {
    showNav ? setShowNav(false) : setShowNav(true)
  }

  return (
    <div className='main__app'>
      <Header toggleNav ={toggleNav}/>
      {showNav && <Navbar/>}
      <IntroPage/>
      <Services/>
      <PreFooter/>
      <Footer/>
    </div>
  )
}

export default App
