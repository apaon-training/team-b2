function Login() {
    return (
        <>
        <span> Store locator Login </span><br></br>
        <label class="Username"> Username:</label>
        <input type="text" id="username"/><br></br>
        <label class="Password"> Password:</label>
        <input type="text" id="password"/>
        <button type="button">submit</button>
        <button type="button"> cancel</button>
        </>
    );
}

export default Login;
