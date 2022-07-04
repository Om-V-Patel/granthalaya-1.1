import React from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Route} from "react-router-dom";
import Cart from './components/Cart';
import Contact from './components/Contact';

const App = () =>  {
  return (
   <>
<Navbar/>

<Route exact path="/">
<Home />
</Route>


<Route path="/Login">
<Login />
</Route>

<Route path="/Signup">
<Signup />
</Route>

<Route path="/Contact">
<Contact />
</Route>

<Route path="/Cart">
<Cart />
</Route>


</>
 )
}
export default App