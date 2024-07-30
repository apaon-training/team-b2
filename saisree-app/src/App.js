import { useState } from 'react';
import Home from './Home/Home'
import Login from './Login/ Login';
function App() {
  
  const [loggedIn, setLoggedIn] = useState(true);
  const onLoginSuccess=()=>{setLoggedIn(true)};
  const onLogoutSuccess=()=>{setLoggedIn(false)};
  
  return (
    
    <>
    {
    (loggedIn === true)?
    (
      <Home LogoutSuccess={()=>onLogoutSuccess()}/>
    ):
    (
      <Login LoginSuccess={()=>onLoginSuccess()}/>
    )
  }
    </>
    
    
  );
}

export default App;
