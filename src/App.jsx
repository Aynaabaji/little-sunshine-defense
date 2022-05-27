import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from '../src/pages/home/Home'
import Topbar from './components/topbar/Topbar'
import Achievements from '../src/pages/achievements/Achievements'
import Contribution from '../src/pages/contribution/Contribution'
import Contact from '../src/pages/contact/Contact'
import About from '../src/pages/about/About'
import Adoption from '../src/pages/adoption/Adoption'
import './index.css'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Topbar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/adopt' element={<Adoption/>}/>
          <Route path='/achievements' element={<Achievements/>}/>
          <Route path='/contribute' element={<Contribution/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
