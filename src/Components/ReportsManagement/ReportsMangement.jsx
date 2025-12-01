import {  SearchInput , Title , SubTitle  , InfoSectionReports , TableReports } from '../index'
const ReportsMangement = () => {
    return (
        <div className='flex flex-col  w-full' >
            <div className='ml-4'>
            <SearchInput placeholder="Search team, deadline..." />
            <Title Title="Reports Management" />
            <SubTitle SubTitle="Upload, Track, And Review Team Reports" />
        </div>
            <InfoSectionReports/>
            <TableReports/>


        </div>
    );
}

export default ReportsMangement;
