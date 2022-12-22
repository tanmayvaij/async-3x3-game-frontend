export default function Home() {
    return (
        <div id="home" className="">
            <div className="flex px-5 text-center items-center h-[calc(100vh-152px)] justify-center flex-col">
                <h5 className="text-xl">async</h5>
                <h1 className="text-7xl">tic tac toe</h1>
            </div>
            <div className="absolute z-10 px-5 bottom-5 w-full flex justify-center flex-col text-white font-bold">
                <button className="rounded-md mb-5 h-14 bg-yellow-400">Login</button>
                <button className="rounded-md h-14 bg-blue-500">Register</button>
            </div>
        </div>
    )
}
