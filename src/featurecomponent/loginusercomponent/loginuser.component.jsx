import './loginuser.component.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export function Loginuser(){
  const history =useNavigate();

const [email, setEmail]=useState('')
const [password, setPassword]=useState('')

async function  submit(e){
  e.preventDefault();

  try{
        await axios.post("http://localhost:8000/login",{
          email,password
        })
        .then(res=>{
          if(res.data=="exist"){
            history("/home")
          }
          else if(res.data=="notexist"){
            alert("user have not signup")
          }
        })
        .catch(e=>{
          alert("wrong details")
          console.log(e);
        })

  }
  catch(e){
      console.log(e);
  }
}
  return (
    <div className="login-form-card1 shadow">
      <div className="login-logo-image-container">
        {/* <img
          className="login-logo-image"
          src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
          alt="website logo"
        /> */}
        <p className="login-logo-name">Login User</p>
      </div>
      <form className="login-form-element" action="POST" >
        <div className="d-flex flex-column justify-content-center mt-2 mb-1">
          <label className="login-label" htmlFor="loginEmail">
            Email:
          </label>
          <input
            className="login-input-ele"
            id="loginEmail"
            placeholder="Enter Your Email"
            type="email"
            onChange={(e)=>{setEmail(e.target.value)}}
           
           
          />
          <p className="login-required-text"></p>
        </div>
        <div className="d-flex flex-column justify-content-center mt-1 mb-1">
          <label className="login-label" htmlFor="loginPassword">
            Password:
          </label>
          <input
            className="login-input-ele"
            id="loginPassword"
            placeholder="Enter Your Password"
            type="password"
            onChange={(e)=>{setPassword(e.target.value)}}
           
          />
          <p className="login-required-text">
            
          </p>
        </div>
        <div className="login-submit-button-container ">
          
         
<button className=" btn btn-success  loginbutton" onClick={submit}>Login</button>
        </div>
        <p className="login-required-text"></p>
      </form>
      <div className="login-forgot-password-container">
        <Link className="login-forgot-password-link">Forgot Password?</Link>
      </div>
      <div className="login-dont-have-account-container">
        <p className="login-dont-have-account-text">
          Don't have an Account?{" "}
          <Link className="login-dont-have-account-link" to={"/signup-user"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

