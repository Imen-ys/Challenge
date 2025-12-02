
const Progress = ({color}) => {
    return (
        <div className="shadow-md rounded-lg h-auto bg-white mt-2 ml-2">
            <h1 className="py-2 pl-2 font-bold">Teams Progress</h1>
            <div className="progress h-[7px] mt-2 mx-3">
                <div className={`progress-bar ${color}`} role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className="text-gray-500 font-semibold text-xs mt-2 mr-2 px-4">3/4 Teams On Track . 1 Pending</p>
            <p className="text-gray-500 font-semibold text-xs mr-2 px-4 pb-2">Submission</p>
        </div>
    );
}

export default Progress;
