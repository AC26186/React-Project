import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link,NavLink} from 'react-router-dom'

const HomeL =() => {
   const [users, setUser] = useState([]);
   let styles = {
    marginRight: '5px',
  };

   useEffect(()=>{
    //console.log("Hello brother");
    loadUsers();
   },[]);
 
   const loadUsers = async () =>{
    const result = await axios.get("http://localhost:5000/users");
    //console.log(result);
    setUser(result.data.reverse());
   }

   const deleteUser =async id =>{
    await axios.delete(`http://localhost:5000/users/${id}`);
    loadUsers();
   }

    return (
     <div className="container">
        <div className="py-4">
            <h1>Home Page</h1>
            <table className="table border shadow">
  <thead className="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
    users.map((user, index) =>(
            <tr key = { index +1 }>
                <th scope="row">{index +1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    <NavLink className="btn btn-primary" style={styles} to={`/user/${user.id}`}>View</NavLink>
                    <NavLink className="btn btn-outline-primary" style={styles} to={`/user/edit/${user.id}`}>Edit</NavLink>
                    <button  className="btn btn-danger" style={styles} onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
            </tr>
        ))
    }
  </tbody>
</table>
        </div>
     </div>
    );
  }

  export default HomeL;
