import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';
function Login() {
    const [ userText, setUserText ] = useState();
    const [ passText, setPassText ] = useState();

    const credentials = {
        User: 'Admin',
        Password: 'apaon'
    }
    const setUserName = (value)=>{
        setUserText(value);
    }
    const setPassword = (value)=>{
        setPassText(value);
    }

    const submitClicked =() =>{
        if(credentials.User === userText && credentials.Password === passText){
            console.log('Login successful !');
        }else{
            console.log('Login failed !');
        }
    }
    return (
        <div className="flex-column h-screen Login-page">
            <div className="flex h-15rem align-items-center justify-content-center text-6xl text-white">
            <span>
            Store Locator Login
            </span>
            </div>
            <div className="flex align-items-center justify-content-center text-3xl text-white gap-8 md:h-3rem">
            <div className="">
                User :
            </div>
            <div className="">
            <InputText onChange={(e) => setUserName(e.target.value)} />
            </div>
            </div>
            <div className="flex align-items-center justify-content-center text-3xl text-white gap-3 md:h-5rem">
            <div className="">
                Password :
            </div>
            <div className="">
            <Password onChange={(e) => setPassword(e.target.value)} toggleMask />
            </div>
            </div>
            <div className="flex align-items-center justify-content-center gap-5 md:h-5rem">
            <Button label="Cancel" severity="warning" size='small' />
            <Button label="Submit" severity="success" size='small' onClick={() => submitClicked ()} /> 
            </div>
            <div className="flex align-items-center justify-content-center text-sm text-white gap-5 md:h-28rem">
                <span>
                    @copyright developed by apaon.com.au - B2 batch
                </span>
            </div>
            </div>
     
    );
}
export default Login;