import React from 'react'
import Navbar from './components/Navbar'
import Works from './components/Works'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div className='w-full text-white  bg-zinc-900 '>
      <Navbar/>
      <Works/>
      <Strips/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
