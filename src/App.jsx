import React from 'react'
import Navbar from './components/Navbar'
import Works from './components/Works'
import Strips from './components/Strips'
import Products from './components/Products'
import Marquees from './components/Marquees'

function App() {
  return (
    <div className='w-full text-white  bg-zinc-900'>
      <Navbar/>
      <Works/>
      <Stripss/>
      <Products/>
      <Marquees/>
    </div>
  )
}

export default App
