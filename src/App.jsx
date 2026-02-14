import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import Home from './home/Home1';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import School from './school/School';
import School_1 from './school/School/School_1';
import School_1_2 from './school/School/School_1_2';
import Home1 from './home/Home1';
import Home from './home/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';  
import ResetPassword from './login/ResetPassword';
import Otp from './login/Otp';
import Cnfrestpassword from './login/Conformresetpassword';
import Std_info__c_update from './studentupdate/Std_info__c_update';
import StudentUpdate from './studentupdate/StudentUpdate';

import Stdinfo from './studentinfo/Stdinfo';
import Std_info__v_update from './studentview/Std_info__v_update';
import Std_pulldata from './studentview/Std_pulldata';





function App() {
  return (
    <BrowserRouter>
      <Routes>
     
      <Route path="/login" element={<Login />} />
      <Route path="/home/school" element={<School />} />
      <Route path="/home/school/1" element={<School_1 />} />
      <Route path="/home/school/1/2" element={<School_1_2 />} />
      <Route path="/home/school/login/1" element={<Login />} />
      



      <Route path="/" element={<Home />} />
      <Route path="/restpassword" element={<ResetPassword />} />
      <Route path="/otp" element={<Otp />} />Cnfrestpassword
      <Route path="/cnfrestpassword" element={<Cnfrestpassword />} /> 

      ===============================================================
      <Route path="/stdinfo" element={<Stdinfo />} /> 
      <Route path='/stdinfo/c/update' element={<Std_info__c_update />} />
      <Route path='/std_info/c1/u/:classid' element={<StudentUpdate />} />
      <Route path='/std_info/c/viewrecords' element={<Std_info__v_update />} />
      <Route path='/std_info/c1/u/pulldata/:classid1' element={<Std_pulldata />} />



      
    
        
      </Routes>
      
      
    </BrowserRouter>
  );
}
export default App
