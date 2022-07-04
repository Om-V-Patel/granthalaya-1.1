import React from 'react'
import Logo from "../assets/logo3.jpg";
const Login = () => {
  return (
    <>
   <div class='logincss' > 
   <img className="logo2" src={Logo} /> 
   <div class="login-email">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="Type your Email Here"/>
  </div>
  <hr></hr>
  <div class="login-pwd">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="Type your Password Here"/>
    <hr></hr>
    <button ClassName="btn waves-effect waves-light #64b5f6 blue darken-1"> Login </button>

<h3><a href='#'> Don't Have an Account ?</a></h3>
</div>
</div>


< />
  )
}

export default Login