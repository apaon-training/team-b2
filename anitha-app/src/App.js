import { useState } from "react";
import Home from "./home/home";
import Login from "./Login /Login";
function App() {
  const [loggedIn, setloggedIn] = useState (true);
  const onLoginSuccess = () => {
    setloggedIn(true);
  }
  const onLogoutSuccess = () => {
    setloggedIn(false);
  }
    return (
      <>
      {(loggedIn === true) ?(
        <Home logoutSuccess = {() =>onLogoutSuccess()}/>
      ):
      (
        <Login loginSuccess = {() => onLoginSuccess()}/>
      )
      }
      
      </>
    );
}
  
  export default App;