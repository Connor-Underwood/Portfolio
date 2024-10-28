import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';


import Games from "./components/Games/Games"



const App = () => {

  
  return (
    <div>
      <div className='dark min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white print:hidden'>
        <Routes>
            <Route path='/games' element={<Games />}  />
            <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
