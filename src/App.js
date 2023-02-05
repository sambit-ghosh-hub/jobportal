
import './App.css';
import Header  from './components/Header/Header';
import Alljobs from './components/Alljobs/Alljobs';
import Eligiblejobs from './components/Eligiblejobs/Eligiblejobs';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import OfferReceived from './components/OfferRecieved/OfferReceived';
import Shortlisted from './components/Shortlisted/Shortlisted';
import Interviewing from './components/Interviewing/Interviewing';
import Rejected from './components/Rejected/Rejected'
import Loginform from './components/Login/Loginform';
import ProfileForm from './components/Profile/ProfileForm'
import Appliedjobs from './components/Appliedjobs/Appliedjobs'
import Signup from './components/Signup/Signup'
import Logout from './components/Logout/Logout';

function App() {
  return (

  <>
   <BrowserRouter>  
    
    <Routes>
      <Route element={<Alljobs/>} path='/alljobs'></Route>
      <Route element={<Eligiblejobs/>} path="/eligiblejobs"/> 
      <Route element={<Appliedjobs/>} path="/appliedjobs"/> 
      <Route element={<OfferReceived/>} path="/offererceived"/>
      <Route element={<Shortlisted/>} path="/shortlisted"/> 
      <Route element={<Interviewing/>} path="/interviewing"/>
      <Route element={<Rejected/>} path="/rejected"/> 
      <Route element={<Loginform/>} path="/"/>
      <Route element={<ProfileForm/>} path="/profile"/>
      <Route element={<Signup/>} path="/signup"/>
      <Route element={<Logout/>} path="/logout"/>


    </Routes>
   
   </BrowserRouter>
     {/* <Alljobs/> */}
   {/* <Loginform/> */}
   {/* <Eligiblejobs/> */}
</>
  );
}

export default App;
