import React from "react"
import logo from './logo.svg';
import './styles/App.css';
import { render } from "react-dom";
import {BrowserRouter as Router,  Routes,  Route, Switch} from "react-router-dom";
import Home from './components/Home';
import EnterWeight from './components/enterWeight/enterweight';
import CreateAccount from './components/enterWeight/CreateAccount';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeL from "./components/pages/HomeL";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";
//const rootElement = document.getElementById("root");
function App() {
  return (
    <div>

     <Router>
     <Navbar/>
     <Routes>
     
      {/* <Route exact path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/EnterWeight" element={<EnterWeight />} />
      <Route path="/CreateAccount" element={<CreateAccount />} /> */}
      
      <Route exact path="/" element={<HomeL />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/user/add" element={<AddUser />} />
      <Route path="/user/edit/:id" element={<EditUser />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="*" element={<NotFound />} />

     </Routes>
    </Router>
    </div>
  );
}

export default App;
