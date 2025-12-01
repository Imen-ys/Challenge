import {MainBar,Title , SearchInput , Workshops ,
        WorkshopHistory , InformationEventPage
} from '../index';
import { IoMdArrowRoundBack } from "react-icons/io";
const Events = () => {
    return (
        <div className="flex w-full">
            <MainBar />
            <div className='flex flex-col items-center w-full'>
                <SearchInput placeholder="Search event , date ..." />

                    <Title title="Events"/>
                    <div className='flex'>
                        <IoMdArrowRoundBack className='text-xl  ml-3 cursor-pointer'/>
                        <p className='ml-2'>back</p>
                    </div>
                <Workshops />
                <WorkshopHistory />
            </div>
            <InformationEventPage />

        </div>
    );
}

export default Events;
