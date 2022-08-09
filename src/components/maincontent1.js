import React,{Component} from "react"
// import React,{useState} from "react"
//import PropTypes from "prop-types";

      //<Header/>
      //<MainContent/>
     //<MainContent pageTitle={"Weight Loss Competition"} numTopics={5}/> 
     // <Footer/>

//function MainContent(props) {
 //   const [count, setCount]=useState(props.numTopics);
 //   return (
  //   <mainContent>
  //      <h2>{props.pageTitle}</h2>
  //      This is Main Content
 //       <p>there are {count} topics</p>
 //       <button onClick={() =>setCount(count + 1)}>Increase Topic Count</button>
 //   </mainContent>
 //   );
 // }

 // MainContent.prototype = {
  //  pageTitle: PropTypes.string
 // }

 class MainContent1 extends Component  {
 constructor(props){
  super(props);
  this.state = {
    title:this.props.pageTitle,
    count:this.props.numTopics
  }
 }

 onClick =()=>{
  this.setState({count:this.state.count +1})
 }
  
  render(){
  return (
   <mainContent1>
     This is Main Content

     <h2>{this.state.title}</h2>
     <h3>This is numbers of topics {this.state.count}</h3>
     <button onClick={this.onClick}>Increase number of Topics</button>
  </mainContent1>
  )
  }
}

  export default MainContent1;