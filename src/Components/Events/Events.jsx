import {MainBar,Title , SearchInput , Workshops ,
        WorkshopHistory , InformationEventPage
} from '../index';
const Events = () => {
    return (
        <div className="flex w-full">
            <MainBar />
            <div className='flex flex-col items-center w-full'>
                <SearchInput placeholder="Search event , date ..." />

            <Title Title="Events"/>

                <Workshops />
                <WorkshopHistory />
            </div>
            <InformationEventPage />

        </div>
    );
}

export default Events;
