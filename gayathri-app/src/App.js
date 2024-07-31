import { useState } from "react";
import Home from "./Home/home";
import Login from "./Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState (true);
  const onLoginSuccess = () => {
    setLoggedIn(true);
  }
    const onLogoutSuccess = () => {
      setLoggedIn(false);
  }
  return (
    <>
    { (loggedIn === true) ? (
      <Home logoutSuccess = {() => onLogoutSuccess()}/>
    ) : (
      <Login loginSuccess = {() => onLoginSuccess()}/>
      
    )
    
  }
    </>
  ) ;
}
  


export default App;
