import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';

function Login(){

    //declare 'user' variable
    const [userText, setUserText ] = useState();
    const [passText, setPassText ] = useState();

    //Hook 3 functions for Username & Password Input - Button click

   // Step 1: Store user name into variable
   // Step 2: Store password into variable

   //Step 3: On clicking on 'Submit' button -> Verify the saved username and password and then show alert
    const credentials = {
        user: 'Admin',
        password: 'apaon'
    }

    const setUserName = (value)=>{
        // console.log(value);
        setUserText(value);  // saving value into 'userText' variable
    }

    const setPassword = (value)=>{
        // console.log(value);
        setPassText(value); // saving value into 'passText' variable
    }

    const submitClicked =() =>{
        // console.log('User name : ' + userText);
        // console.log('Password : ' + passText);
        if(credentials.user === userText && credentials.password === passText){
            //Login successful
            console.log('Login successful !');
        }else{
            //Login failed.
            console.log('Login failed !');
        }
    }

    return (
        <>
        <div className="flex-column h-screen bg-primary">
            {/* Page title */}
            <div className="flex h-15rem align-items-center justify-content-center text-5xl">
                <span>
                    Store Locator
                </span>
            </div>

            {/* Username */}
            <div className="flex align-items-center justify-content-center my-3">
                <div className="">
                    Username:
                </div>
                <div className="">
                    {/* <input></input> */}
                    <InputText onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>

            {/* Password */}
            <div className="flex align-items-center justify-content-center my-3">
                <div className="">
                    Password:
                </div>
                <div className="">
                    {/* <input></input> */}
                    <InputText onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>

            {/* Submit & Cancel */}
             <div className="flex align-items-center justify-content-center my-3 gap-5">
                {/* <button className="">
                    Cancel:
                </button>
                <button className="">
                    Submit:
                </button> */}
                <Button label="Cancel" severity="warning"   raised />
                <Button label="Submit"  severity="success"  raised  onClick={() => submitClicked()} />
            </div>

            {/* copyright footer */}
             <div className="flex align-items-center justify-content-center my-3 gap-5 h-12rem text-sm">
                <span>
                    @copyright developed by apaon.com.au - B2 batch
                </span>
            </div>
        </div>
        </>
    )
}

export default Login;