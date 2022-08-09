import React, { Component } from "react"
import Table from 'react-bootstrap/Table';

//function MainContent() {
 //   return (
 //    <maincontent>
 //       This is Main Content
 //   </maincontent>
 //   );
 // }

 class MainContent extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      DataisLoaded: false
  };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
  }  


  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

    return (
    <div> 
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      {
      items.map((item,index) => (      
        <tr key = { index }>
          <td>{ item.id }</td>
            <td>{ item.username }</td>
            <td>{ item.name }</td>
            <td>{ item.email }</td>
        </tr>
            ))
        }
        </tbody>
        </Table>
    </div>
);
}
 }

 

  export default MainContent;