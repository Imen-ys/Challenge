import {ItemOfInfoSection} from '../index';
import { HiUserGroup } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { GiTrophy } from "react-icons/gi";
import { MdStars } from "react-icons/md";
const InfoSection = () => {
    return (
        <div className='flex grid grid-cols-4 w-full ml-[40px]'>
            <ItemOfInfoSection
            icon={<HiUserGroup />} number={50} infoName="Members" border_color={"border-b-[#FAE086]"} bg_Color={"bg-[#FAE086]"} text_color={"text-black"}
            />
            <ItemOfInfoSection
            icon={<IoMdPerson />} number={20} infoName="Players" border_color={"border-b-[#FAE086]"} bg_Color={"bg-[#FAE086]"} text_color={"text-black"}
            />
            <ItemOfInfoSection
            icon={<GiTrophy />} number={5} infoName="Rank"border_color={"border-b-[#FAE086]"} bg_Color={"bg-[#FAE086]"} text_color={"text-black"}
            />
            <ItemOfInfoSection
            icon={<MdStars />} number={6} infoName="Active tasks" border_color={"border-b-[#FAE086]"} bg_Color={"bg-[#FAE086]"} text_color={"text-black"}
            />
        </div>
    );
}

export default InfoSection;
