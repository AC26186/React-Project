import { Axios } from "axios";
import React,{useState} from "react";
import axios  from "axios";
import {useNavigate} from 'react-router-dom';

const AddUser =() => {
    let navigate  = useNavigate();
    const [user, setUser] =useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })
    
    const {name,username,email,phone,website} = user;

    const onInputChange =e =>{
        // console.log(e.target.value);
        setUser({...user, [e.target.name]:e.target.value})
    }

    const onSubmit =async e=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/users",user);
        navigate ("/")
    }
    return (
     <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={e=> onSubmit(e)}>
            <div className="form-group p-2">
             <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter name"
              name="name"
              value={name}
              onChange={e =>onInputChange(e)}
             />
            </div>
            <div className="form-group p-2">
             <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter user name"
              name="username"
              value={username}
              onChange={e =>onInputChange(e)}
             />
            </div>
            <div className="form-group p-2">
             <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter email address"
              name="email"
              value={email}
              onChange={e =>onInputChange(e)}
             />
            </div>
            <div className="form-group p-2">
             <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter phone number"
              name="phone"
              value={phone}
              onChange={e =>onInputChange(e)}
             />
            </div>
            <div className="form-group p-2">
             <input
              type="text"
              className="form-control form-control-lg"
              placeholder="enter website address"
              name="website"
              value={website}
              onChange={e =>onInputChange(e)}
             />
            </div>
            <div className="form-group p-2">
            <button className="btn btn-primary btn-block">Add User</button>
            </div>
        </form>
        </div>
        
     </div>
    );
  }

  export default AddUser;