

import "./App.css";


import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Approuter } from "./app.router";
import { Loginuser } from "./featurecomponent/loginusercomponent/loginuser.component";
import { LoginPage } from "./featurecomponent/loginpagecomponent/loginpage.component";
import { Loginvendor } from "./featurecomponent/loginvendorcomponent/loginvendor.component";
import { LoginPagevendor } from "./featurecomponent/loginpagevendorcomponent/loginpagevendor.component";
import { Signup } from "./featurecomponent/signupcomponent/signup.component";
import { Dashboard } from "./components/dashboardcomponent/dashboard.component";
import { Signupvendor } from "./featurecomponent/signupvendorcomponent/signupvendor.component";


const App = () => {
  return (
    
    <div>
     <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<LoginPage></LoginPage>}></Route>
      <Route path="/vendor-login" element={<LoginPagevendor></LoginPagevendor>}></Route>
      <Route path="/signup-user" element={<Signup></Signup>}></Route>
      <Route path="/signup-vendor" element={<Signupvendor></Signupvendor>}></Route>
      <Route path="/home" element={<Dashboard></Dashboard>}></Route>
     </Routes>
      
    </div>
  );
};

export default App;
