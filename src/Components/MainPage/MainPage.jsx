import {InfoSection , SearchInput , TinyAreaChart , Actions} from '../index'
const MainPage = () => {
return (
    <div className="flex flex-col items-center w-full">
        <SearchInput/>
        <div className="w-[800px]">
                <h1 className="font-bold mt-4 text-left text-xl">
                Overview Panel
                </h1>
        </div>
        <InfoSection />
            <div className="w-[800px]">
                <h1 className="font-bold mt-4 text-left text-xl">
                    Points Earned By Each This Month
                </h1>
            </div>
        <TinyAreaChart />
            <div className="w-[800px]">
                <h1 className="font-bold mt-4 text-left text-xl">
                    Quick Actions
                </h1>
            </div>
        <Actions />

    </div>
);
};

export default MainPage;