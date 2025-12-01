import { MdOutlineFileUpload } from "react-icons/md";
import {Reactions , Profile , Progress , Statistique , Action} from '../index';
const InformationReports = () => {
    return (
        <div className='w-[300px] h-full'>
            <Reactions />
            <Profile />
            <Progress color={'bg-[#FFA9AB]'} />
            <Statistique color={'#FFA9AB'}/>

            <Action icon={<MdOutlineFileUpload />}
                title={"Upload Report"}
                bgcolor={"bg-[#FFEDEE]"}
                brcolor={"border-b-[#FFA9AB]"}
            />
        </div>
    );
}

export default InformationReports;
