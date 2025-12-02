import { SearchInput, Title, SubTitle , InfoSectionContent ,    TableContent
 } from '../';
const ContentManagement = () => {
    return (
        <div className='flex flex-col  w-full' >
            <div className='ml-4'>
                <SearchInput placeholder="Search team, deadline..." />
                <Title Title="Content Managements" />
                <SubTitle SubTitle="Manage Content, And Review Team Progress" />
            </div>
            <InfoSectionContent/>
            <TableContent/>
        </div>
    );
}

export default ContentManagement;
