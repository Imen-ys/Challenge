import { SearchInput , Title ,TabelUsersManagment , SubTitle } from '../index'
const UsersManagementsPage = () => {
    return (
        <div className='flex flex-col  w-full' >
            <div className='ml-4'>
                <SearchInput placeholder="Search by name, role or team..." />
                <Title Title="Users  Managements" />
                <SubTitle SubTitle="Manage All Users And Roles" />
            </div>

            <TabelUsersManagment />
        </div>
    );
}

export default UsersManagementsPage;
