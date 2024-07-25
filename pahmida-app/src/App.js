 import { useState } from "react";
import Login from "./ Login-page/Login";
import Home from "./Home/home";
 function App(){ 
    const [loggedIn, SetLoggedIn] = useState(false);
    
    const onLoginSuccess=()=>{SetLoggedIn(true)};
    return(
        <>
        {(loggedIn==true)?
        (
            <Home/>
        ):
        (
            <Login LoginSuccess={()=>onLoginSuccess()}
            />
        )
    } 

    
        
        </>
        );
 }
export default App;