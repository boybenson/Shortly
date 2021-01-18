import React from 'react'
import Header from './components/Header'
import './App.css'
import IntroPage from './components/IntroPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className='main__app'>
      <Header/>
      <IntroPage/>
      <Footer/>
    </div>
  )
}

export default App
