import { useState } from 'react';
import Home from './Home/Home'
import Login from './Login/ Login';
function App() {
  
  const [loggedIn, setloggedIn] = useState(false);
  const onLoginsuccess=()=>{setloggedIn(true)};
  return (
    
    <>
    {
    (loggedIn === true)?
    (
      <Home/>
    ):
    (
      <Login Loginsuccess={()=>onLoginsuccess()}/>
    )
  }
   
    </>
    
    
  );
}

export default App;
