import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Logo from "../assets/logo1.jpg";
const Signup = () => {
const history = useHistory();

const [user,setUser] =useState({
  email:"" , password:"" , address:"", city:"", state:"", zip:""
});
let email,value;
const handleInputs=(e) => {
  console.log(e);
  email = e.target.email;
  value=e.target.value;
  setUser({... user, [email]: value});
}



const PostData= async (e) => {
  e.preventDefault();
  const { email , password , address, city, state, zip} = user;
const res = await fetch ("/register",{
  method:"POST",
  headers:{"Content-type" :"application/json"},
  body:JSON.stringify({
    email , password , address, city, state, zip
  
  })
})
const data = await res.json();
if(data.status == 422 || !data ){
  window.alert("invalid error");
  console.log("invaild error");
}else{
  window.alert("success");
  console.log("success");
 history.push("/login");
}
}
  return (
    <>
    <form class="row g-3" style={{width:'50%' , margin:"5px auto" }} >
    <img className="logo3" src={Logo} />
    
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder=" your Email" value={user.name} onChange={handleInputs}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="your Password" value={user.Password} onChange={handleInputs}/ >
</div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="your address"  value={user.Address} onChange={handleInputs}/ >
  </div>
  
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder=" your City" value={user.City} onChange={handleInputs}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select" >
      <option selected>Choose State</option>
      <option>Gujarat</option>
      <option>Rajasthan</option>
      <option>Punjab</option>
      <option>Assam</option>
      <option>Goa</option>
      <option></option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"  value={user.Zip} onChange={handleInputs} />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"   />
      <label class="form-check-label" for="gridCheck">
      I hereby declare that the details furnished above are true and correct to the best of my knowledge.
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary" onClick={PostData}>Register</button>
  </div>
</form>
        </>

  )
}

export default Signup