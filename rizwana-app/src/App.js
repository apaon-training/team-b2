import Home from './Home/Home'
import { useState } from 'react';

import Login from "./Login/Login";

function App() {

  const [loggedIn, setloggedIn] = useState(false);
  const onLoginSuccess = ()=>{setloggedIn(true)};
  
  
    return(
      <>
    {(loggedIn === true)?
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
