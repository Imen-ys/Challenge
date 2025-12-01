import {ItemOfInfoSection} from '../index';
import { GiSave } from "react-icons/gi";
import { MdOutlinePendingActions } from "react-icons/md";
import { MdAssignmentLate } from "react-icons/md";
const InfoSectionReports = () => {
    return (
        <div className='flex grid grid-cols-3 w-full ml-[20px]'>
            <ItemOfInfoSection
            icon={<GiSave />} number={12} infoName="Submitted" border_color={"border-b-[#FFA9AB]"} bg_Color={"bg-[#FFEDEE]"} text_color={"text-[#FFA9AB]"}
            />
            <ItemOfInfoSection
            icon={<MdOutlinePendingActions />} number={"02"} infoName="Pending" border_color={"border-b-[#FFA9AB]"} bg_Color={"bg-[#FFEDEE]"} text_color={"text-[#FFA9AB]"}
            />
            <ItemOfInfoSection
            icon={<MdAssignmentLate />} number={"01"} infoName="Late" border_color={"border-b-[#FFA9AB]"} bg_Color={"bg-[#FFEDEE]"} text_color={"text-[#FFA9AB]"}
            />
        </div>
    );
}

export default InfoSectionReports;
