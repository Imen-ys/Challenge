import ProfileImage from '../Images/profile.png'
const Profile = () => {
    return (
            <div className="bg-gray-200  mt-2 w-[300px] h-[120px] rounded-lg">
                <div className='flex '>
                    <div className="absolute top-[95px] right-[198px] z-40 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                    <img src={ProfileImage} alt="Profile"  className='w-[50px] h-auto mt-4 ml-[50px]'/>
                    <div className='mt-[30px] ml-2'>
                        <h3 className='text-bold'>Abderrhamane Ya</h3>
                        <p className='text-gray-100 text-sm'>@abderrahmaneyazi</p>
                    </div>
            </div>

        </div>
        );
}

export default Profile;
