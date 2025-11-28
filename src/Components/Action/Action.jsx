
const Action = ({icon , title , bgcolor , brcolor}) => {
    return (
        <div className={`w-full flex rounded-lg border-b ${bgcolor} ${brcolor} px-6 py-2 mt-3 mr-2 shadow-md cursor-pointer 
        justify-center items-center`}>
            <div className="pt-1">{icon}</div>
            <span className="ml-2">{title}</span>
        </div>
    );
}

export default Action;
