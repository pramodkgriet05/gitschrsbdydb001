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
import Pulldataafter from './studentupdate/Pulldataafter';
import S_resetpassword from './login/S_ResetPasswordLink';
import S_otp from './login/S_otp';
import Std_pulldataBySection from './studentupdate/Std_pulldataBySection';
import Sportspage from '../Sports/Sportspage';
import Extracurricularpage from '../Extracurricular Activities/Extracurricularpage';
import Std_pulldatabysection from './studentview/Std_pulldatabysection';
import Std_pulldatabysectionget from './studentview/Std_pulldatabysection';
import PullEventDetails from '../Sports/PullEventDetails';
import Fees from './Fees/Fees';
import DailyUpdates from './Daily updates/DailyUpdates';
import DailyUpdatesForm from './Daily updates/DailyUpdatesForm';





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
      <Route path="/otp" element={<Otp />} /> 
      <Route path="/cnfrestpassword" element={<Cnfrestpassword />} /> 

      ===============================================================
      <Route path="/stdinfo" element={<Stdinfo />} /> 
      <Route path='/stdinfo/c/update' element={<Std_info__c_update />} />
      <Route path='/std_info/c1/u/:stdid' element={<StudentUpdate />} />
      <Route path='/std_info/c1/u/pulldata' element={<Std_pulldata />} />

      <Route path='/std_info/c1/u/:stdid/:sectionid' element={<Std_pulldataBySection />}   />

      

      {/* --------------------------------------view records student links -------------------------------------*/}


            <Route path='/std_info/c/viewrecords' element={<Std_info__v_update />} />
            <Route path='/std_info/c/viewrecords' element={<Std_info__v_update />} />
            <Route path='/std_info/c1/u/pulldata1/:classid' element={<Std_pulldata />} />
            <Route path='/std_info/c1/u/pulldata1/:classid/:sectionid' element={<Std_pulldatabysectionget />} />

      {/* ------------------------------------------------------------------------------------ */}

      < Route path='/sch/resetpasswordlink' element={<S_resetpassword />} />
      <Route path='/s/otp/createaccount' element={<S_otp />} />

      {/* ------------------------------------------------------------------------------------ */}

       <Route path='/stdinfo/c1/u/:year/:type' element={<Sportspage />} /> 

        <Route path='/stdinfo/c1/u/:year/:type/d' element={<PullEventDetails />} /> 

       {/* <Route path='/stdinfo/c1/u/:year/:type' element={<Sportspage />} />  */}
       {/* ------------------------------------------------------------------------------------ */}

       <Route path='/stdinfo/c1/u/2026/fees' element={<Fees />} />  

       {/* ------------------------------------------------------------------------------------ */}

        <Route path='/stdinfo/c1/u/2026/dailyupdates' element={<DailyUpdates />} /> 
         <Route path='/stdinfo/dailyupdates/:y/:classid/:sectionid' element={<DailyUpdatesForm />} />   

       {/* ------------------------------------------------------------------------------------ */}
        
      </Routes>
      
      
    </BrowserRouter>
  );
}
export default App
