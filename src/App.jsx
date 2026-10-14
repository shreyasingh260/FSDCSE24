import { useState } from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>
    </div> 
  )
}

export default App