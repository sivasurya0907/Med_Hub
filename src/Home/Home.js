import React from 'react'
import Main from '../Main/Main';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Aboutus from '../Aboutus/Aboutus';
const Home = () => {
  
  return (
   <>
   <Nav></Nav>
   <Main
    MainImg="https://bigwigstech.com/wp-content/uploads/2021/11/Health-professional-team.gif"
    title="MEDHUB"
    text="Your comprehensive health hub, connecting you to trusted medical resources and expertise healthcare solutions "
    buttonText="Your Wellness Our priority"
    url="/Aboutus"
    btnclass="show"
    />
    
    <Aboutus></Aboutus>
   <Footer></Footer> 
    </>
  );
};
export default Home