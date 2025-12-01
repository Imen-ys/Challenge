import {Action} from '../index'
import { IoMdAdd } from "react-icons/io";
import { MdOutlineFileUpload } from "react-icons/md";
const Actions = () => {
    return (
        <div className='flex w-[800px] ml-3'>
            <Action icon={<IoMdAdd />}
                title={"Add Member"}
                bgcolor={"bg-[#F3F8FF]"}
                brcolor={"border-b-[#C3D9FF]"}
            />

            <Action icon={<IoMdAdd />}
                title={"Add Event"}
                bgcolor={"bg-[#FFF6EE]"}
                brcolor={"border-b-[#FFD1AB]"}
            />

            <Action icon={<MdOutlineFileUpload />}
                title={"Upload Report"}
                bgcolor={"bg-[#FFEDEE]"}
                brcolor={"border-b-[#FFA9AB]"}
            />

            <Action icon={<IoMdAdd />}
                title={"Add Video"}
                bgcolor={"bg-[#FAF6FF]"}
                brcolor={"border-b-[#E1C9FF]"}
            />
        </div>
    );
}

export default Actions;
