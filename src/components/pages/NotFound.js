import React from "react";
import pageNotFoundImage from '../img/404-error.gif';
const NotFound =() => {
    return (
    <div className="Not-found">
     <div className="display-1">
       {/* <h1>404 page not found</h1>

       <h1>We are sorry but the page you are looking for does not exist.</h1> */}
       
        <img style={{height:'auto',width:'99%'}} src={pageNotFoundImage} id='pageNotFoundImage' />
        <div class="Img-centered"><h1>404 page not found</h1></div>
     </div>
     </div>
    );
  }

  export default NotFound;
