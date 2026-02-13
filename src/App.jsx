import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import School from './school/School';
import School_1 from './school/School/School_1';
import School_1_2 from './school/School/School_1_2';
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
          <Route path="/home/school" element={<School />} />
            <Route path="/home/school/1" element={<School_1 />} />
              <Route path="/home/school/1/2" element={<School_1_2 />} />
        
      </Routes>
    </BrowserRouter>
  );
}
export default App
