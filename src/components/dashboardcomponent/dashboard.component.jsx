import { useLocation } from "react-router-dom";

export function Dashboard(){
    const location =useLocation()
    return(
        <div>
            <h1> Welcome to user Dashboard</h1>
        </div>
    )
}