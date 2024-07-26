import './App.css';
import Login from './login/login';
import Home from './home/home';
import { useState } from 'react';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

    // if loggedIn is false ... that we need to show login 
    // if loggedIn is true ... that we need to show Home page

    // let someVariable = null;
    // if(loggedIn === true){
    //    someVariable = true;
    // }else{
    //    someVariable = false;
    // }

    // someVariable = loggedIn === true ? true : false;

   const onLoginSucess = ()=>{
      setLoggedIn(true);
    }

    const onLogoutSucess = ()=>{
      setLoggedIn(false);
    }

  return (
  <>
{(loggedIn === true) ? (
    <Home logoutSucess = {()=> onLogoutSucess()}/>
): (
    <Login loginSuccess = {() => onLoginSucess()}/>
)}

  )
  </>
  );
}

export default App;
