import './ Login.css';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { Password } from 'primereact/password';

function Login(props) {

    const [usertext, setUserText] = useState();
    const [passtext, setPassText] = useState();

    const Credentials = {
        user:'Admin',
        password:'apaon'
    }

    const setUsername=(value)=>{
        setUserText(value);
    }
    const setPassword=(value)=>{
        setPassText(value);
    }

    const submitclicked=()=>{
        if(Credentials.user === usertext && Credentials.password ===passtext){
            console.log('Login successful !');
            props.LoginSuccess();
        }
        else{
            console.log('Login failed !');
        }        
    }
    const cancelclicked=()=>{
        setUserText("");
        setPassText("");
        console.log('cancelclicked!');
    }
        
    return (
        <>
        {/*title*/}
        <div className='flex-column h-full'>
        <div className='flex align-items-center justify-content-center my-3 text-6xl h-15rem'>
            <div>Store Locator Login</div>
        </div>


        {/*username*/}
        <div className='flex align-items-center justify-content-center my-4 gap-3 text-3xl'>
            <div className="">
                Username:
            </div>
            <div className="flex h-2rem ml-1">
                {/*<input></input>*/}
                <InputText value={ usertext } onChange={(e) => setUsername(e.target.value)} className ='h-3rem w-17rem ' />

             </div>
        </div>


        {/*password*/}
        <div className='flex align-items-center justify-content-center my-4 gap-3 text-3xl'>
            <div className=''>
                Password:
            </div>
            <div className='flex h-2rem ml-2'>
                {/*<input></input>*/}
                <Password value={ passtext } onChange={(e) => setPassword (e.target.value)} toggleMask feedback={false} />
                
             </div>
        </div>


        {/*button*/}
        <div>
            <div className='flex align-items-center justify-content-center gap-3 text-3xl h-5rem'>
            {/*<button className=>Cancel</button>
            <button className=>Submit</button>*/}
            
            
            <Button label="Cancel" severity="warning"  raised onClick={() => cancelclicked()}size='small' />
            <Button label="Submit" severity="success" raised onClick={() => submitclicked()} size='small' />
         </div>

        {/*end*/}
        <div className='flex align-items-center justify-content-center my-3 gap-5 h-12rem text-lg'>
            <span>@copyright developed by apaon.com.au - B2 batch</span>
        </div>
        </div>
        </div>
        </>
    );
}

export default Login;
