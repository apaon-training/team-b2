function Login() {
    return (
        <div className="flex-column h-screen Login-page">
            <div className="flex h-15rem align-items-center justify-content-center text-6xl text-white">
            <span>
            Store Locator Login
            </span>
            </div>
            <div className="flex align-items-center justify-content-center text-3xl text-white gap-8 md:h-1rem">
            <div className="">
                User :
            </div>
            <div className="">
                <input></input>
            </div>
            </div>
            <div className="flex align-items-center justify-content-center text-3xl text-white gap-3 md:h-5rem">
            <div className="">
                Password :
            </div>
            <div className="">
                <input></input>
            </div>
            </div>
            <div className="flex align-items-center justify-content-center gap-4 md:h-5rem">
            <button className="bg-gray-500 text-white text-2xl">
                Cancel 
            </button>
            <button className="bg-blue-600 text-white text-2xl">
                Submit 
            </button>
            </div>
            <div className="flex align-items-center justify-content-center text-sm text-white gap-5 md:h-28rem">
                <span>
                    @copyright developed by apaon.com.au - B2 batch
                </span>
            </div>
            </div>
     
    );
}
export default Login;