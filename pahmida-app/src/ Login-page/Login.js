 import './Login.css';
 import { InputText } from 'primereact/inputtext';
 import { Button } from 'primereact/button';
 import { useState } from 'react';
 import { Password } from 'primereact/password';

 function Login() {

   const [userText, setUserText ]= useState();
   const [passText, setPassText ]= useState();
   const credentials={
      user:'Admin',
      password:'apaon'
      }
const setUserName=(value)=>{
   setUserText(value);
}
const setPassword=(value)=>{
   setPassText(value);
}
const submitClicked=()=>{
   if(credentials.user===userText && credentials.password===passText){
      console.log('Login Successful !');
   }
   else{
      console.log('Login failed');
   }
}
    return (
       <> 
    <div className="flex-column h-screen bg-primary">
      <div className="flex h-10rem align-items-center justify-content-center text-6xl">
         <span>
            Store Locator
            </span>
      </div>
     <div className="flex align-items-center justify-content-center gap-4 my-3">
      <div className="user">
         Username:
         </div>
         <div className="">
         <InputText onChange={(e) => setUserName(e.target.value)}/>
      </div>
     </div>
     <div className="flex align-items-center justify-content-center gap-4 my-3">
      <div className="password">
         Password:
         </div>
         <div className="">
         <Password onChange={(e) => setPassword(e.target.value)} toggleMask/>
        
      </div>
     </div>
     <div className="flex align-items-center justify-content-center text-5xl h-3rem gap-5">
         <Button label="Cancel" severity="warning" raised size='small' />
         <Button label="Submit" severity="success" raised onClick={() => submitClicked() } size='small' />
     </div>
     <div className="flex align-items-center justify-content-center text-xl h-12rem gap-5">
         <span>
            @copyright developed by apaon.com.au -B2 batch
         </span>
      </div>
   </div>
  
     </>
    );
}
export default Login;