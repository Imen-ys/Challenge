import {Reactions , Profile , Progress , Statistique , Action} from '../index';
import { IoMdAdd } from "react-icons/io";

const InformationContent = () => {
    return (
        <div className='w-[300px] h-full'>
            <Reactions />
            <Profile />
            <Progress color={'bg-[#E1C9FF]'} />
            <Statistique color={'#E1C9FF'}/>

            <Action icon={<IoMdAdd />}
                title={"Add Video"}
                bgcolor={"bg-[#FAF6FF]"}
                brcolor={"border-b-[#E1C9FF]"}
            />
        </div>
    );
}

export default InformationContent;
