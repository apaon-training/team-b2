function Login() {
    return (
        <>
        <div className=" Login flex-column"> 
          <div className='flex justify-content-center h-10rem text-5xl'>
          <div className='flex align-items-center justify-content-center w-full'>
            Store locator Login </div>
            </div>
        <div className=" Login flex-column"></div>
        <div className='flex justify-content-center text-5xl'>   
        <div className='flex align-items-center justify-content-center text-5xl'>
        <label class="Username"> Username:</label>
        <input type="text" id="username"/><br></br>
        </div>
        
        
        <label class="Password"> Password:</label>
        <input type="text" id="password"/><br></br>
        </div>
       <div className='flex justify-content-center text-5xl'>
        <div className='flex align-items-center justify-content-center'>
        <button type="button">submit</button>
        <button type="button"> cancel</button></div>
        </div>
        </div>
        </>
    );
}

export default Login;
