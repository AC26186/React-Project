import React,{useState, useEffect} from "react";
import axios  from "axios";
import {Link,NavLink,useParams} from 'react-router-dom'


const User =() => {
    const {id} = useParams();
    const [user, setUser] =useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    

    useEffect(()=>{
        loadUser()
    },[]);

    const loadUser =async e=>{
        const result = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(result.data);
    }

    return (
     <div className="container py-4">
        <Link className="btn btn-primary" to="/">back to Home</Link>
        <h1 className="display-7">User Id:{id}</h1>
        <hr/>
        <ul className="list-group w-50">
         <li className="list-group-item"><b>name:</b>{user.name}</li>
         <li className="list-group-item"><b>user name:</b>{user.name}</li>
         <li className="list-group-item"><b>email:</b>{user.email}</li>
         <li className="list-group-item"><b>phone:</b>{user.phone}</li>
         <li className="list-group-item"><b>website:</b>{user.website}</li>     
        </ul>
     </div>
    );
  }

  export default User;