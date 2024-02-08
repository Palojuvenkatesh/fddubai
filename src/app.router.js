import { Route, Routes } from "react-router-dom";
import { Loginuser } from "./featurecomponent/loginusercomponent/loginuser.component";

export function Approuter(){
    return(
        <Routes>
            <Route path="/login" element={<Loginuser></Loginuser>}></Route>
        </Routes>
    )
}