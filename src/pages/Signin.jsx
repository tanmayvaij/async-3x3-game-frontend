export default function Signin() {
    return (
        <div id="signin" className="">
            <div className="p-5">
                <h5 className="font-bold">Login</h5>
                <h1 className="text-3xl font-bold">Please enter your details</h1>
            </div>
            <div className="p-5">
                <div className="flex flex-col space-y-2">
                    <span></span>
                    <span className="font-bold">Username</span>
                    <input className="h-12 rounded-md pl-5 text-sm w-full bg-gray-100" type="text" name="" placeholder="Type your username here" />
                </div>
                <div className="flex flex-col space-y-2">
                    <span></span>
                    <span className="font-bold">Password</span>
                    <input className="h-12 rounded-md pl-5 text-sm w-full bg-gray-100" type="password" name="" placeholder="Type your password here" />
                </div>
            </div>
            <div className="bottom-5 absolute px-5 text-white w-full">
                <button className="rounded-md h-14 w-full bg-yellow-500 font-bold">Login</button>
            </div>
        </div>
    )
}
