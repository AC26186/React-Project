import React from "react"
import MainContent from './maincontent';
import Footer from './footer';
import Header from './Header';
import Menu from './menu';



function Home() {
    return (
    <div>
     <Header/>
     <Menu/>
     <MainContent/>
     <Footer/>
     </div>
    );
  }

  export default Home;