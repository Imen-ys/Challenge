import { MdHome } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { MdOutlineDateRange } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BsLightning } from "react-icons/bs";
import { BiCloud } from "react-icons/bi";
import { TbHelp } from "react-icons/tb";
import { MdOutlinePolicy } from "react-icons/md";

import { IoLogoTiktok } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { Choice , Media} from '../../index'

const Choices = () => {
    return (
            <div className='ml-3'>
                <div className='border-b'>
                    <Choice path="/" icon={<MdHome />} name="Home" />
                    <Choice icon={<RiTeamLine />} name="Teams" />
                    <Choice path="/events" icon={<MdOutlineDateRange />} name="Events" />
                    <Choice icon={<CgProfile />} name="Profile" />
                    <Choice icon={<BsLightning />} name="Quests" />
                </div>

                <div className='w-32 h-32'></div>
                <div className='border-t'>
                    <Choice icon={<BiCloud />} name="Q&A" />
                    <Choice icon={<TbHelp />} name="Help Center" />
                    <Choice icon={<MdOutlinePolicy />} name="Policies" />
                </div>
                <button className='border rounded-lg text-gray-500 cursor-pointer
                py-1 px-8 mr-2 text-[12px]  '>
                    Log out</button>

                <div className='flex'>
                    <Media icon={<IoLogoTiktok />} />
                    <Media icon={<FaFacebook />} />
                    <Media icon={<FaYoutube />} />
                    <Media icon={<FaInstagram />} />
                    <Media icon={<FaDiscord />} />
                </div>
            </div>
    );
}

export default Choices;
