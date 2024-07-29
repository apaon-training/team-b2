import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';

import './Login.css';


function Login(props) {

    const [userText, setUserText ] = useState();
    const [passText, setPassText ] = useState();

    const credentials = {
        user: 'Admin',
        password: 'apaon'
    }

    const setUserName = (value)=>{
        setUserText(value);
        
    }

    const setPassword = (value)=>{
        setPassText(value);
    }

    const submitClicked =() =>{
        if(credentials.user === userText && credentials.password === passText){
            console.log('Login Successful !');
            props.LoginSuccess();
        }else{
            console.log('Login Failed !');
        }
    }

    const cancelClicked =() =>{
        setUserText("");
        setPassText("");
        console.log('cancel Clicked');
    }

    return(
        <>
         <div className="flex-column  h-full">
        <div className='flex align-items-center justify-content-center text-6xl my-3  h-15rem '>
        <div>Store Locator Login</div>
        </div><br></br>
        <div className='flex  align-items-center justify-content-center  text-3xl my-3 gap-7'>
        <div className="">
            User:
        </div>
        <div className="">
           {/*<input></input>*/}
           <InputText value={userText}onChange={(e) => setUserName(e.target.value)} />
        </div>
        </div>
        
        <div className="flex  align-items-center justify-content-center text-3xl my-3 gap-2 ">
        <div className="">
            Password:
        </div>
        <div className="">
            {/*<input></input>*/}
            <Password value={passText} onChange={(e) => setPassword(e.target.value)} toggleMask />
        </div>
       </div>
       <div>
        <div className="flex  align-items-center justify-content-center  text-3xl my-3 gap-3">
        {/*<button className="cancel">Cancel</button>
        <button className="submit">Submit</button>*/}
        <Button label="Cancel" severity="warning" size="small"  onClick={() => cancelClicked()} />
        <Button label="Submit"  severity="success" size="small" onClick={() => submitClicked()}  />
        </div>
       </div>
       <div className="flex  align-items-center justify-content-center text-3xl my-3 gap-5 h-12rem text-sm">
        <span>@copyright developed by apaon.com.au - B2 batch</span>
       </div>
       </div>
    

        </>
    );
}
 
export default Login;