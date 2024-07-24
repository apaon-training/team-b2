import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from 'react';
function Login() {
    const [ userText, setUserText ] = useState();
    const [ passText, setPassText ] = useState();

    const credentials = {
        User : 'Admin',
        Password : 'apaon'
    }
    const setUserName = (value)=>{
        setUserText(value);
    }
    const setPassword = (value)=>{
        setPassText(value);
    }

    const submitClicked = () =>{
        if( credentials.user === userText && credentials.password === passText ){
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
            <div className="flex align-items-center justify-content-center text-3xl text-white gap-8 md:h-1rem">
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
            <InputText onChange={(e) => setPassword(e.target.value)} />
            </div>
            </div>
            <div className="flex align-items-center justify-content-center gap-5 md:h-5rem">
            <Button label="Cancel" severity="warning" />
            <Button label="Submit" severity="success" onClick={() => submitClicked ()} /> 
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