import {InfoSection , SearchInput , TinyAreaChart , Actions , Title} from '../index'
const MainPage = () => {
return (
    <div className="flex flex-col items-center w-full">
        <SearchInput placeholder="Search members..." />
        <Title Title="Overview Panel" />
        <InfoSection />
        <Title Title="Points Earned This Month" />
        <TinyAreaChart />
        <Title Title="Quick Actions" />
        <Actions />

    </div>
);
};

export default MainPage;