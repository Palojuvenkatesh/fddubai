import { useNavigate } from "react-router-dom";
import './loginpage.component.css';
import { useEffect } from "react";
import Cookies from "js-cookie";
import { Loginuser } from "../loginusercomponent/loginuser.component";

export function LoginPage(){
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
          <button className="login-as-user-button login-is-it-user-button">
            Login As a User
          </button>
        </div>
        <div className="login-as-user-container">
          <button
            className="login-as-user-button"
            onClick={() => navigate("/user-vendor")}
          >
            Login As a Vendor
         </button>
        </div>
      </div>
     <Loginuser></Loginuser>
    </div>
  );
};

