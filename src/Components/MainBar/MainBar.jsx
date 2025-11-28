import StartByITC from '../Images/StartyByITC.png'
import { MdEmail  } from "react-icons/md";
import {Choices} from '../index'

const MainBar = () => {
    return (
        <div className='ml-2 w-40 border-r inline-block '>
            <img src={StartByITC} alt="StartByITC" className="mb-3 w-64 h-auto" />
            <Choices />
            <div className='flex items-center gap-1 ml-4 mt-2 mb-3 '>
                <MdEmail />
                <p className='text-gray-500 text-xs'>itc.blida@gmail.com</p>
            </div>
            <p className='text-center text-gray-500 text-[10px]'>
                © 2025 starly.All rights reserved.
            </p>

        </div>
    );
}

export default MainBar;

