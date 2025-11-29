
const ManagementItem = ({icon , title , iconColor , bg , bordercolor}) => {
    return (
        <div className={`flex w-[300px] h-[40px] border-l-2 rounded-md shadow-md ${bordercolor} mt-2 ml-1`}>
            <div className={`${iconColor} w-6 h-6 mt-2 mx-2 p-1 rounded-full`}>{icon}</div>
            <p className={`px-5 py-2 ${bg} my-1 text-[12px] rounded-md`}>{title}</p>
        </div>
    );
}

export default ManagementItem;
