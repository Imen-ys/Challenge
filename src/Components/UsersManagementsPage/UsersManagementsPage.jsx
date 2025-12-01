import { SearchInput , Title ,TabelUsersManagment, Reactions , Profile , Progress , Statistique , ManagementItem } from '../index'
const UsersManagementsPage = () => {
    return (
        <div className='flex flex-col  w-full' >
            <div className='ml-4'>
                <SearchInput placeholder="Search by name, role or team..." />
                <Title Title="Users  Managements" />
                <p className='text-sm font-bold my-1'>
                    Manage All Users And Roles
                </p>
            </div>

            <TabelUsersManagment />
        </div>
    );
}

export default UsersManagementsPage;
