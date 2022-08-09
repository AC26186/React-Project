import React from "react";
import logo from '../images/header.jfif';

function Header() {
    return (
     <header>
        <img style={{height:'auto',width:'99%'}} src={logo} id='logo' />
        <h1><a href="index.html">ReactJs Web Design</a></h1>
    </header>
    );
  }

  export default Header;
