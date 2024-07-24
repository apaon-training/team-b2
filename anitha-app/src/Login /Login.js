function Login() {
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
                <input></input>
            </div>
            </div>
            <div className="flex align-items-center justify-content-center text-2xl text-white gap-3 my-3">
            <div className="">
                Password :
            </div>
            <div className="">
                <input></input>
            </div>
            </div>
            <div className="flex align-items-center justify-content-center my-3 gap-5 ">
            <button className="bg-gray-200 text-white text-2xl">
                Cancel 
            </button>
            <button className="bg-blue-700 text-white text-2xl">
                Submit 
            </button>
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