import { useState } from "react";
import Home from "./home/home";
import Login from "./Login /Login";
function App() {
  const [loggedIn, setloggedIn] = useState (false);
  const onLoginSuccess = () => {
    setloggedIn(true);
  }
    return (
      <>
      {(loggedIn === true) ?(
        <Home/>
      ):
      (
        <Login loginSuccess = {() => onLoginSuccess()}/>
      )
      }
      
      </>
    );
}
  
  export default App;