import { ManagementItem } from "../index";
import { TiGroup } from "react-icons/ti";
import { BsCalendar2DateFill } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { BiSolidBookContent } from "react-icons/bi";
const Management = () => {
    return (
        <div className="mt-3  ml-2">
            <ManagementItem path={'/management/Team'} icon={<TiGroup />} title={"Manage Team"} iconColor={"bg-[#C3D9FF]"} bg={"bg-[#F3F8FF]"} bordercolor={"border-[#C3D9FF]"}/>
            <ManagementItem icon={<BsCalendar2DateFill />} title={"Manage Events"} iconColor={"bg-[#FFD4B0]"} bg={"bg-[#FFF6EE]"} bordercolor={"border-[#FFE8D5]"}/>
            <ManagementItem icon={<BiSolidReport />} title={"Manage Reports"} iconColor={"bg-[#FFA9AB]"} bg={"bg-[#FFEDEE]"} bordercolor={"border-[#FFD4D5]"}/>
            <ManagementItem icon={<BiSolidBookContent />} title={"Manage Content"} iconColor={"bg-[#B2A0C8]"} bg={"bg-[#FAF6FF]"} bordercolor={"border-[#F0E4FF]"}/>
        </div>
    );
}

export default Management;
