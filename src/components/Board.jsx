export default function Board() {
    return (
        <div id="board" className="">
            <div id="result" className="w-60 h-14 bg-yellow-200">

            </div>
            <div>
                <div className="flex">
                    <div className="w-20 h-20 border-2 border-b-yellow-200 border-r-yellow-200 border-l-white border-t-white"></div>
                    <div className="w-20 h-20 border-2 border-l-yellow-200 border-b-yellow-200 border-r-yellow-200 border-t-white"></div>
                    <div className="w-20 h-20 border-2 border-l-yellow-200 border-b-yellow-200 border-r-white border-t-white"></div>
                </div>
                <div className="flex">
                    <div className="w-20 h-20 border-2 border-t-yellow-200 border-r-yellow-200 border-b-yellow-200 border-l-white"></div>
                    <div className="w-20 h-20 border-2 border-yellow-200"></div>
                    <div className="w-20 h-20 border-2 border-t-yellow-200 border-l-yellow-200 border-b-yellow-200 border-r-white"></div>
                </div>
                <div className="flex">
                    <div className="w-20 h-20 border-2 border-t-yellow-200 border-r-yellow-200 border-l-white border-b-white"></div>
                    <div className="w-20 h-20 border-2 border-l-yellow-200 border-t-yellow-200 border-r-yellow-200 border-b-white"></div>
                    <div className="w-20 h-20 border-2 border-l-yellow-200 border-t-yellow-200 border-r-white border-b-white"></div>
                </div>
            </div>
        </div>
    )
}
