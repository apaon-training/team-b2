import './ Login.css';
function Login() {
    return (
        <>
        {/*title*/}
        <div className='flex-column h-full'>
        <div className='flex align-items-center justify-content-center my-3 text-6xl h-15rem'>
            <div>Store Locator Login</div>
        </div>


        {/*username*/}
        <div className='flex align-items-center justify-content-center my-3 gap-2 text-3xl'>
            <div className="">
                Username:
            </div>
            <div className="flex h-2rem">
                <input></input>
             </div>
        </div>


        {/*password*/}
        <div className='flex align-items-center justify-content-center my-3 gap-2 text-3xl'>
            <div className=''>
                Password:
            </div>
            <div className='flex h-2rem ml-2'>
                <input></input>
             </div>
        </div>


        {/*button*/}
        <div>
            <div className='flex align-items-center justify-content-center gap-3 text-3xl'>
            <button className='ccolor'>Cancel</button>
            <button className='scolor'>Submit</button>
            </div>
        </div>

        {/*end*/}
        <div className='flex align-items-center justify-content-center my-3 gap-5 h-12rem text-lg'>
            <span>@copyright developed by apaon.com.au - B2 batch</span>
        </div>
        </div>
        </>
    );
}

export default Login;
