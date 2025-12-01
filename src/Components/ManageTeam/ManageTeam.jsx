import {UsersManagementsPage ,  MainBar ,InformationManageTeam } from '../index'
const ManageTeam = () => {
    return (
        <div className='flex w-full'>
            <MainBar />
            <UsersManagementsPage />
            <InformationManageTeam/>
        </div>
    );
}

export default ManageTeam;
