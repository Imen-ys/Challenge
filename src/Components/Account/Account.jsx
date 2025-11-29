import woman from '../Images/woman.png'
import { HiCalendarDateRange } from "react-icons/hi2";
import { PiStudentFill } from "react-icons/pi";
const Account = () => {
    return (
    <div className="relative shadow-md rounded-lg h-[300px] bg-white mt-6 ml-2">

    <div className="absolute top-[130px] left-[160px] z-40 bg-green-500 w-3 h-3 rounded-full"></div>
    <div className="bg-gray-100 rounded-full border border-black w-5 h-5 absolute top-[10px] left-4 z-20"></div>
    <div className="bg-gray-200 h-[120px] rounded-lg"></div>
    <img src={woman} alt="Woman" className='w-[70px] h-auto absolute top-[85px] left-[100px] z-30' />
    <p className='item-center mt-5 ml-[75px] font-bold'>Bouzaghti Malak</p>
    <p className='text-center text-gray-500 text-[10px]'>@bouzaghitimalak</p>
    <p className='text-center  text-[13px]'>UI UX designer</p>

    <div className='flex '>
        <div className='flex text-gray-500 ml-4'>
            <HiCalendarDateRange className='w-3 mr-1'/>
            <p className=' text-[10px]'>Joined September 2025</p>
        </div>

        <div className='flex text-gray-500 ml-4'>
            <PiStudentFill className='w-3 mr-1'/>
            <p className='text-[10px]'>Computer Science</p>
        </div>
    </div>
    <p className='item-center mt-1 ml-[75px] font-bold'>Team Level Progress</p>
    <div className="progress h-[7px] mt-2 mx-3">
        <div className="progress-bar bg-[#F7D047]" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>

    </div>

    );
}

export default Account;
