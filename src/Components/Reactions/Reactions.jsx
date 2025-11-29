import fire from "../Images/fire.png"
import notification from "../Images/notification.png"
import shield from "../Images/shield.png"
const Reactions = () => {
    return (
        <div className="flex mt-2">
            <div className="bg-gray-200 rounded-full border border-black w-5 h-5 mr-1 mt-1"></div>
            <p className="">bouzaghi malak</p>

            <div className="flex ml-2 ">
                <img src={shield} alt="shield" className="w-4 h-4 mt-1 mx-1"/>
                <p className="text-amber-700">5</p>
            </div>
            <div className="flex ml-2">
                <img src={fire} alt="fire" className="w-4 h-4 mt-1 mx-1"/>
                <p className="text-red-500">5</p>
            </div>
            <div className="flex ml-2 ">
                <img src={notification} alt="notification" className="w-4 h-4 mt-1 mx-1"/>
                <p className="text-yellow-500">5</p>
            </div>



        </div>
    );
}

export default Reactions;
