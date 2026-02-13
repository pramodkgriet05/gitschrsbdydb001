import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import School from './school/School';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
          <Route path="/home/school" element={<School />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App
