import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Photo from './pages/Photo'


const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <Photo/>

    </>
  )
}

export default App
