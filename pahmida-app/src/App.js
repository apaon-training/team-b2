 import { useState } from "react";
import Login from "./ Login-page/Login";
import Home from "./Home/home";
 function App(){ 
    const [loggedIn, SetLoggedIn] = useState(false);
    
    const onLoginSuccess=()=>{SetLoggedIn(true)};
   
    const onLogoutSuccess=()=>{SetLoggedIn(false)};
    return(
        <>
        {(loggedIn==true)?
        (
            <Home  logoutSuccess={()=> onLogoutSuccess()}/>
        ):
        (
            <Login loginSuccess={()=>onLoginSuccess()}

            />
        )
    }    
        </>
        );
 }
export default App;