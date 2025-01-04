import Aboutus from './Aboutus/Aboutus';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Blog from './Blog/Blog'
import Home from './Home/Home';
import Login from './Login/Login';
 import {BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'
import Ourservices from './Ourservices/Ourservices';

import Appointment from './Appointment/Appointment';
import VideoList from './VideoList/VideoList'
import Footer from './Footer/Footer';
import { My_Page2 } from './My_page2/My_page2';

import Nav from './Nav/Nav';
import Rate from './Rate/Rate';
import Amb from './Amb/Amb';
import Dr1 from './Dr1/Dr1'
import Chatbot from './Chatbot/Chatbot';
import Getstarted from './Getstarted/Getstarted';
import Contact from './Contact/Contact';
import App1 from './App1/App1';
import Kidscare from './Kidscare/Kidscare';
import MeetDoc from './MeetDoc/MeetDoc';
import Dr from './Dr/Dr'
import Game from './Game/Game'

// import { AuthProvider } from './AuthProvider/AuthProvider';

function App() {
  return (
  <>
        {/* <AuthProvider>
          <Nav/>
        </AuthProvider> */}
        <BrowserRouter>
        <Routes>
       
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/GS" element={<Getstarted/>}/>
        <Route path="/My_page2" element={<My_Page2/>}/>
        <Route path="/Nav" element={<Nav></Nav>}/>
        <Route path="/MedHubBot" element={<Chatbot/>}/>
        <Route path="/MeetDoc" element={<MeetDoc/>}/>
        <Route path="/Dr1" element={<Dr1/>}/>
        <Route path="/Rate" element={<Rate/>}/>
        <Route path="/MealPlanner" element={<App1/>}/>
        <Route path="/VideoList" element={<VideoList/>}/>
        <Route path="/Footer" element={<Footer/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/OurServices" element={<Ourservices/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/AmbulanceService" element={<Amb/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/KidsCare" element={<Kidscare/>}/>
        <Route path="/Dr" element={<Dr/>}/>
{/*         
        <Route path="" element={<Game/>}/>  */}
       </Routes>
        </BrowserRouter> 
  </>
  );
}

export default App;
