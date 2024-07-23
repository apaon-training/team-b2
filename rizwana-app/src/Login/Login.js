
import './Login.css';

function Login() {
    return(
        <>
         <div className="Login flex-column">
      <div className='flex justify-content-center '>
        <div className='flex align-items-center justify-content-center text-5xl  w-full '>
        Store Locator Login
        </div><br></br>
        <div className='flex  align-items-center justify-content-center text-3xl'>
        <label class="username"> username:</label>
        </div>
        
        <input type="text" id="User"/><br></br>
        
        <label class="password"> password:</label>
        <input type="text" id="Password"/><br></br>
        <button type="button" onclick="checkPassword()">Cancel</button>
        <button type="button" onclick="checkPassword()">Submit</button>

        </div>
        </div>

        </>
    );
}
 
export default Login;