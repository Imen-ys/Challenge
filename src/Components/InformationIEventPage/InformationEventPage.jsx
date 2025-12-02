import {Reactions , Profile , Progress , Statistique , Action} from '../index';
import { IoMdAdd } from "react-icons/io";

const InformationEventPage = () => {
    return (
        <div className='w-[300px] h-full'>
            <Reactions />
            <Profile />
            <Progress color={'bg-[#FFD1AB]'} />
            <Statistique color={'#FFD1AB'} Title={"Attendace Rate"}/>

            <Action icon={<IoMdAdd />}
                title={"Add Event"}
                bgcolor={"bg-[#FFF6EE]"}
                brcolor={"border-b-[#FFD1AB]"}
            />
        </div>
    );
}

export default InformationEventPage;
