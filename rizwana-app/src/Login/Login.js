
import './Login.css';

function Login() {
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
            <input></input>
        </div>
        </div>
        
        <div className="flex  align-items-center justify-content-center text-3xl my-3 gap-2 ">
        <div className="">
            Password:
        </div>
        <div className="">
            <input></input>
        </div>
       </div>
       <div>
        <div className="flex  align-items-center justify-content-center  text-3xl my-3 gap-3">
        <button className="cancel">Cancel</button>
        <button className="submit">Submit</button>
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