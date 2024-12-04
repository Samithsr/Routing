import React from 'react'

import Navbar from './Components/Navbar'
// import './App.css'
import AllRouting from './AllRouting'



const App = () => {
  return (
    <div className='app'>
      <Navbar />


      <main className='app_main'>
        <AllRouting />
        
      </main>
    </div>
  )
}

export default App 