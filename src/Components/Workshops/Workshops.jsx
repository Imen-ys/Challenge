import {Title , Workshop} from '../index';
const Workshops = () => {
    return (
        <div className=''>
            <Title Title="Workshops" />
            <div className='flex flex-wrap grid grid-cols-3 gap-3 w-full w-full'>
            <Workshop title="Challenges" date="Sep 12, 14:00" location="Location" bg_color="bg-[#E7F0FF]" border_Color="border-[#296CF2]" />
            <Workshop title="Workshops" date="Sep 12, 14:00" location="ITC Local" bg_color="bg-[#FFEFD2]" border_Color="border-[#F25C05]" />
            <Workshop title="Challenges" date="Sep 12, 14:00" location="Location" bg_color="bg-[#E7F0FF]" border_Color="border-[#296CF2]" />
            <Workshop title="Workshops" date="Sep 12, 14:00" location="ITC Local" bg_color="bg-[#FFEFD2]" border_Color="border-[#F25C05]" />
            <Workshop title="Challenges" date="Sep 12, 14:00" location="Location" bg_color="bg-[#E7F0FF]" border_Color="border-[#296CF2]" />
            <Workshop title="Challenges" date="Sep 12, 14:00" location="Location" bg_color="bg-[#E7F0FF]" border_Color="border-[#296CF2]" />
            <Workshop title="Workshops" date="Sep 12, 14:00" location="ITC Local" bg_color="bg-[#FFEFD2]" border_Color="border-[#F25C05]" />
            <Workshop title="Challenges" date="Sep 12, 14:00" location="Location" bg_color="bg-[#E7F0FF]" border_Color="border-[#296CF2]" />
            <Workshop title="Workshops" date="Sep 12, 14:00" location="ITC Local" bg_color="bg-[#FFEFD2]" border_Color="border-[#F25C05]" />

            </div>

        </div>
    );
}

export default Workshops;
