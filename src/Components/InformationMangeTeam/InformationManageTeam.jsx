import {Reactions , Profile , Progress , Statistique , Action} from '../index';
import { IoMdAdd } from "react-icons/io";

const InformationManageTeam = () => {
    return (
        <div className='w-[300px] h-full'>
            <Reactions />
            <Profile />
            <Progress color={'bg-[#C3D9FF]'} />
            <Statistique color={'#C3D9FF'}/>

            <Action icon={<IoMdAdd />}
                title={"Add Member"}
                bgcolor={"bg-[#F3F8FF]"}
                brcolor={"border-b-[#C3D9FF]"}
            />
        </div>
    );
}

export default InformationManageTeam;
