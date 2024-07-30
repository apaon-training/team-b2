import Home from './Home/Home'
import { useState } from 'react';

import Login from "./Login/Login";

function App() {

  const [loggedIn, setloggedIn] = useState(true);
  const onLoginSuccess = ()=>{setloggedIn(true)};
  const onLogoutSuccess = ()=>{setloggedIn(false)};
  
    return(
      <>
    {(loggedIn === true)?
    (
    <Home  LogoutSuccess={()=>onLogoutSuccess()}/>
  ):
  (
    <Login LoginSuccess={()=>onLoginSuccess()}/>
  )
  
}
</>
 );
  }
    
export default App;
