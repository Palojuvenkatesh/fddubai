import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signupvendor.component.css';
import axios from "axios";

export function Signupvendor(){
    const history =useNavigate();

    const [username, setUsername]=useState('')
    const [email, setEmail]=useState('')
    const [phonenumber, setPhonenumber]=useState('')
    const [password,setPassword]=useState('')

    async function  submit(e){
        e.preventDefault();
      
        try{
              await axios.post("http://localhost:8000/signup-vendor",{
                username,email,phonenumber,password
              })
              .then(res=>{
                if(res.data=="exist"){

                  alert("user already exists")
                }
                else if(res.data=="notexist"){
                  
                alert("user signin succesfully")
                history("/vendor-login")
                
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
        <div className="signup-form-card shadow">
            <div className="signup-logo-image-container">
                {/* <img
                    className="signup-logo-image"

                    src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"

                    alt="website logo"
                /> */}
                <p className="signup-logo-name">Vendor Signup</p>
            </div>
            <form className="signup-form-element" action="POST"> 
                <div className="d-flex flex-column justify-content-center mt-2 mb-1">
                    <label className="signup-label" htmlFor="signupUsername">
                        Username:
                    </label>
                    <input
                        className="signup-input-ele"
                        id="signupUsername"
                        placeholder="Enter Your Username"
                        type="text"
                        onChange={(e)=>{setUsername(e.target.value)}}
                        

                    />
                    <p className="signup-required-text"></p>
                </div>
                <div className="d-flex flex-column justify-content-center mt-1 mb-1">
                    <label className="signup-label" htmlFor="signupEmail">
                        Email:
                    </label>
                    <input
                        className="signup-input-ele"
                        id="signupEmail"
                        placeholder="Enter Your Email"
                        type="email"
                       onChange={(e)=>{setEmail(e.target.value)}}
                    />

                    <p className="signup-required-text"></p>

                </div>
                <div className="d-flex flex-column justify-content-center mt-1 mb-1">
                    <label className="signup-label" htmlFor="signupPhoneNumber">
                        Phone number:
                    </label>
                    <input
                        className="signup-input-ele"
                        id="signupPhoneNumber"
                        placeholder="Enter Your Phone number"
                        type="text"
                        onChange={(e)=>{setPhonenumber(e.target.value)}}

                        
                    />
                    <p className="signup-required-text">
                      

                    </p>
                </div>
                <div className="d-flex align-items-center flex-wrap mt-1 mb-1">
                    <div className="d-flex align-items-center me-5 mt-1 mb-1">
                        <input
                            type="radio"
                            className="signup-radio-input"
                            id="maleInput"
                            value={"Male"}
                            name="gender"
                          
                            
                        />
                        <label className="signup-radio-text" htmlFor="maleInput">
                            Male
                        </label>
                    </div>
                    <div className="d-flex align-items-center mt-1 mb-1">
                        <input
                            type="radio"
                            className="signup-radio-input"
                            id="femaleInput"
                            value={"Female"}
                            name="gender"
                           
                        />
                        <label className="signup-radio-text" htmlFor="femaleInput">
                            Female
                        </label>
                    </div>

                </div>
                <div className="d-flex flex-column justify-content-center mt-1 mb-1">
                    <label className="signup-label" htmlFor="signupPassword">
                        Password:
                    </label>
                    <input
                        className="signup-input-ele"
                        id="signupPassword"
                        placeholder="Enter Your Password"
                        type="password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <p className="signup-required-text">
                       
                    </p>
                </div>
                <div className="signup-submit-button-container">
                    
                    <input className="signup-submit-button" type="submit" onClick={submit}>
          </input>
                </div>
                <p className={`signup-required-text
`}>
                    
                </p>
            </form>
            <div className="signup-already-have-account-container">
                <p className="signup-already-have-account-text">
                    Already have an Account?{" "}

                    
<Link to="/vendor-login">Signin</Link>
                    
               
            </p>
        </div>
</div >
);
};
