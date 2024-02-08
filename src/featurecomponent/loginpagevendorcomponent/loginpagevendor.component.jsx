import { useNavigate } from "react-router-dom";
import './loginpagevendor.component.css';
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Loginuser } from "../loginusercomponent/loginuser.component";
import { Loginvendor } from "../loginvendorcomponent/loginvendor.component";


export function LoginPagevendor() {
  const navigate = useNavigate();
  useEffect(() => {
    const jwtToken = Cookies.get("fdb_user_jwt_token");
    if (jwtToken !== undefined) {
      navigate("/");
    }
    //eslint-disable-next-line
  }, []);
  return (
    
      <div className="login-form-bg-container">
        <div className="d-flex justify-content-center align-items-center mt-5 mb-3">
          <div className="login-as-user-container login-is-it-user-container">
            <a href="/login">
              <button className="login-as-user-button login-is-it-user-button">
                Login As a User
              </button>
            </a>

          </div>
          <div className="login-as-user-container login-is-it-vendor-container ">
            <button
              className="login-as-user-button login-is-it-vendor-button" 
              onClick={() => navigate("/vendor-login")}
            >
              Login As a Vendor
            </button>
          </div>
        </div>
        <Loginvendor></Loginvendor>
       
      </div>
 

  );
};

