
import './Login.css';

function Login() {
    return(
        <>
        <span>Store Locator Login</span><br></br>
        <label class="username"> username:</label>
        <input type="text" id="User"/><br></br>
        <label class="password"> password:</label>
        <input type="text" id="Password"/><br></br>
        <button type="button" onclick="checkPassword()">Cancel</button>
        <button type="button" onclick="checkPassword()">Submit</button>



        </>
    );
}
 
export default Login;