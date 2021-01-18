import React from 'react'
import Header from './components/Header'
import './App.css'
import IntroPage from './components/IntroPage'
import Footer from './components/Footer'
import PreFooter from './components/PreFooter'

function App() {
  return (
    <div className='main__app'>
      <Header/>
      <IntroPage/>
      <PreFooter/>
      <Footer/>
    </div>
  )
}

export default App
