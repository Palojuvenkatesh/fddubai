import { Link, useNavigate } from "react-router-dom";
import './loginvendor.component.css';
import { useState } from "react";
import Cookies from "js-cookie";

export function Loginvendor(){
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState({
    email: "",
    emailRequiredText: "",
  });
  const [loginPassword, setPassword] = useState({
    password: "",
    passwordRequiredText: "",
  });
  const [loginServerMessage, setLoginServerMessage] = useState("");

  const changeTheLoginEmail = (event) => {
    const emailInput = event.target.value;

    setLoginServerMessage("");

    if (emailInput === "") {
      setLoginEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "Required*",
      }));
    } else {
      setLoginEmail((prevState) => ({
        ...prevState,
        email: emailInput,
        emailRequiredText: "",
      }));
    }
  };
  const changeTheLoginPassword = (event) => {
    const passwordInput = event.target.value;

    setLoginServerMessage("");

    if (passwordInput === "") {
      setPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "Required*",
      }));
    } else {
      setPassword((prevState) => ({
        ...prevState,
        password: passwordInput,
        passwordRequiredText: "",
      }));
    }
  };
  const saveTokenAndNavigate = (jwtToken) => {
    Cookies.set("fdb_user_jwt_token", jwtToken, { expires: 1 });
    navigate("/");
  };
  const loginTheUser = async () => {
    const url = "http://localhost:5050/auth/login-user";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail.email,
        password: loginPassword.password,
      }),
    };
    const loginRes = await fetch(url, options);
    const loginJsonData = await loginRes.json();

    if (loginRes.ok === true) {
      saveTokenAndNavigate(loginJsonData.token);
    } else {
      setLoginServerMessage(loginJsonData.message);
    }
  };
  const validateLoginForm = () => {
    if (loginEmail.email === "") {
      setLoginEmail((prevState) => ({
        ...prevState,
        email: "",
        emailRequiredText: "Required*",
      }));
    } else if (loginPassword.password === "") {
      setPassword((prevState) => ({
        ...prevState,
        password: "",
        passwordRequiredText: "Required*",
      }));
    } else {
      loginTheUser();
    }
  };
  const submitLoginForm = (event) => {
    event.preventDefault();
    validateLoginForm();
  };
  return (
    <div className="login-form-card shadow">
      <div className="login-logo-image-container">
        <img
          className="login-logo-image"
          src="https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png"
          alt="website logo"
        />
        <p className="login-logo-name">FindDubai</p>
      </div>
      <form className="login-form-element" onSubmit={submitLoginForm}>
        <div className="d-flex flex-column justify-content-center mt-2 mb-1">
          <label className="login-label" htmlFor="loginEmail">
            Email
          </label>
          <input
            className="login-input-ele"
            id="loginEmail"
            placeholder="Enter Your Email"
            type="text"
            value={loginEmail.email}
            onChange={changeTheLoginEmail}
          />
          <p className="login-required-text">{loginEmail.emailRequiredText}</p>
        </div>
        <div className="d-flex flex-column justify-content-center mt-1 mb-1">
          <label className="login-label" htmlFor="loginPassword">
            Password
          </label>
          <input
            className="login-input-ele"
            id="loginPassword"
            placeholder="Enter Your Password"
            type="password"
            value={loginPassword.password}
            onChange={changeTheLoginPassword}
          />
          <p className="login-required-text">
            {loginPassword.passwordRequiredText}
          </p>
        </div>
        <div className="login-submit-button-container">
          <button className="login-submit-button" type="submit">
            Login
          </button>
        </div>
        <p className="login-required-text">{loginServerMessage}</p>
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

