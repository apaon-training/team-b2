import { useState } from "react";
import Home from "./Home/home";
import Login from "./Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState (false);
  const onLoginSuccess = () => {
    setLoggedIn(true);
  }
  return (
    <>
    { (loggedIn === true) ? (
      <Home/>
    ) : (
      <Login loginSuccess = {() => onLoginSuccess()}/>
    )
  }
    </>
  ) ;
}
  


export default App;
