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
import DailyUpdates_S from './Daily updates/DailyUpdates_S';
import RoleBased from './RoelBased/RoleBased';
import Sportspage_S from './studentupdate/extra&sports/Sportspage_S';
import PullEventDetails_S from './studentupdate/extra&sports/PullEventDetails_S';
import Stdinfo_T from './studentinfo/Stdinfo_T';
import Stdinfo_S from './studentinfo/Stdinfo_S';
import SchUserList from './SchoolUserList/SchUserList';
import DailyActivities from './DailyActivities/ActivitiesByClass';
import ActivitiesByClass from './DailyActivities/ActivitiesByClass';
import ActivitiesByClassForm from './DailyActivities/ActivitiesByClassForm';
import AbcPullDetails from './DailyActivities/AbcPullDetails';
import ActivitiesByClassForm_S from './DailyActivities/ActivitiesByClassForm_S';
import AbcPullDetails_S from './DailyActivities/AbcPullDetails_S';
import Std_info_page_all from './studentinfo/Std_info_page_all';
import Std_info1 from './studentinfo/Std_info1';
import Samax from './progaxios/Samax';
import PullEventDetails_V from './studentupdate/extra&sports/PullEventDetails_V';





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

      =====================================================================================================
      <Route path="/stdinfo" element={<Stdinfo />} />
      <Route path="/stdinfo/t" element={<Stdinfo_T />} />
      <Route path="/stdinfo/s" element={<Stdinfo_S />} /> 
      <Route path='/stdinfo/c/update' element={<Std_info__c_update />} /> 
      <Route path='/std_info/c1/u/:stdid' element={<StudentUpdate />} />
      <Route path='/std_info/c1/u/pulldata' element={<Std_pulldata />} />

      <Route path='/std_info/c1/u/:stdid/:sectionid' element={<Std_pulldataBySection />}   />

       <Route path='/std/info/:y' element={<Std_info_page_all />} />
       <Route path='/std/info/1' element={<Std_info1 />} />
 

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
          <Route path='/s1/stdinfo/c1/u/:year/:type' element={<Sportspage_S />} /> 
          <Route path='/s/stdinfo/c1/u/:year/:type/d' element={<PullEventDetails_S />} />
          <Route path='/stdinfo/c1/u/:year/:type/video' element={<PullEventDetails_V />} /> 


       {/* <Route path='/stdinfo/c1/u/:year/:type' element={<Sportspage />} />  */}
       {/* ------------------------------------------------------------------------------------ */}

          <Route path='/stdinfo/c1/u/2026/fees' element={<Fees />} />  

       {/* ------------------------------------------------------------------------------------ */}

         <Route path='/stdinfo/c1/u/2026/dailyupdates' element={<DailyUpdates />} /> 
         <Route path='/stdinfo/dailyupdates/:y/:classid/:sectionid' element={<DailyUpdatesForm />} />   
         <Route path='/stdinfo/s/c1/u/:y/dailyupdates' element={<DailyUpdates_S />} />   

       {/* ------------------------------------------------------------------------------------ */}
 
        <Route path='/rolebased' element={<RoleBased />} /> 
        <Route path='/stdinfo/2026/s/userlist' element={<SchUserList />} />  
  
  {/* ------------------------------------------------------------------------------------ */} 

    <Route path='/stdinfo/c1/u/ac/:year/:type' element={<ActivitiesByClass />} />
    <Route path='/stdinfo/ac/t/:y/:classid/:sectionid' element={<ActivitiesByClassForm />} />
    <Route path='/stdinfo/abc/:year/d' element={<AbcPullDetails />} />
    <Route path='/stdinfo/ac/s/:y' element={<ActivitiesByClassForm_S />} />
    <Route path='/stdinfo/abc/s/:year/d' element={<AbcPullDetails_S />} />
     
 {/* ------------------------------------------------------------------------------------ */} 

        <Route path='/std/axintr/1' element={<Samax />} />

 


 {/* ---------------------------------------------------------------------------------------- */}

 {/* ============================================================================================= */}

 
      </Routes>
       
    </BrowserRouter>
  );
}
export default App
