import {ItemOfInfoSection} from '../index';
import { GiSave } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdAssignmentLate } from "react-icons/md";
const InfoSectionContent = () => {
    return (
        <div className='flex grid grid-cols-3 w-full ml-[20px]'>
            <ItemOfInfoSection
            icon={<GiSave />} number={12} infoName="Submitted" border_color={"border-b-[#E5D0FF]"} bg_Color={"bg-[#F6EEFF]"} text_color={"text-[#E1C9FF]"}
            />
            <ItemOfInfoSection
            icon={<MdOutlinePendingActions />} number={"02"} infoName="Pending" border_color={"border-b-[#E5D0FF]"} bg_Color={"bg-[#F6EEFF]"} text_color={"text-[#E1C9FF]"}
            />
            <ItemOfInfoSection
            icon={<MdAssignmentLate />} number={"01"} infoName="Late" border_color={"border-b-[#E5D0FF]"} bg_Color={"bg-[#F6EEFF]"} text_color={"text-[#E1C9FF]"}
            />
        </div>
    );
}

export default InfoSectionContent;
