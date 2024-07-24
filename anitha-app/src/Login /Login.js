import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
function Login() {
    const [userText, setUserText ] = useState();
    const [passText, setPassText ] = useState();
    const credentials = {
        user: 'Admin',
        password: 'Anitha',
    }
    const setUserName = (value)=>{
        setUserText(value);
    }
    const setPassword = (value)=>{
        setPassText(value);
    }
    const submitClicked = () =>{
        if(credentials.user === userText && credentials.password === passText){
            console.log('Login successful !');
        }else{
            console.log('Login failed !');
        }
    }
    return (
        <>
        <div className="flex-column h-screen bg-primary">
            <div className="flex h-15rem align-items-center justify-content-center text-5xl text-white">
            <span>
            Store Locator Login
            </span>
            </div>
            <div className="flex align-items-center justify-content-center text-2xl text-white gap-7 my-3">
            <div className="">
                User :
            </div>
            <div className="">
                <InputText onChange={(e) => setUserName(e.target.value)} />           
                 </div>
            </div>
            <div className="flex align-items-center justify-content-center text-2xl text-white gap-3 my-3">
            <div className="">
                Password :
            </div>
            <div className="">
                <InputText onChange={(e) => setPassword(e.target.value)} />    
            </div>
            </div>
            <div className="flex align-items-center justify-content-center my-3 gap-5 ">
            <Button label="Cancel" serverity="warning" raisrd />
            <Button label="Submit" serverity="success" raised onClick={() => submitClicked()} />
            </div>
            <div className="flex align-items-center justify-content-center text-5m text-white gap-5 h-25rem">
                <span>
                    @copyright developed by apaon.com.au - B2 batch
                </span>
            </div>
            </div>
     </>
    );
}
export default Login;