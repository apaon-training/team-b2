

function Login(){
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
                    <input></input>
                </div>
            </div>

            {/* Password */}
            <div className="flex align-items-center justify-content-center my-3">
                <div className="">
                    Password:
                </div>
                <div className="">
                    <input></input>
                </div>
            </div>

            {/* Submit & Cancel */}
             <div className="flex align-items-center justify-content-center my-3 gap-5">
                <button className="">
                    Cancel:
                </button>
                <button className="">
                    Submit:
                </button>
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