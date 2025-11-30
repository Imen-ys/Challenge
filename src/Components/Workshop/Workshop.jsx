import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsExclamationCircle } from "react-icons/bs";
const Workshop = ({title , date , location ,bg_color , border_Color}) => {
    return (
        <div className={`w-auto  ${bg_color} border-b-2 ${border_Color} mt-2 mr-2 p-2 rounded-md
        shadow-md `}>
            <div>
                <p className="text-lg font-semibold">{title}</p>
            </div>
            <div className="flex ">
                <div className="flex text-gray-500 text-sm mr-2">
                    <CiCalendarDate className="mt-1 mr-1" />
                    <p>{date}</p>
                </div>

                <div className="flex text-gray-500 text-sm ">
                    <CiLocationOn className="mt-1 mr-1" />
                    <p>{location}</p>
                </div>
            </div>
            <button className={`flex ml-1 mb-2  mt-1 border-1 ${border_Color} py-1 px-[80px] rounded-full bg-white text-sm`}>
                <BsExclamationCircle className="mt-1 mr-1" />
                Details
            </button>
        </div>
    );
}

export default Workshop;
