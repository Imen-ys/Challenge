
const ItemOfInfoSection = ({icon , number , infoName , color}) => {
    return (
        <div className="border-b-[#FAE086] border-b-2 rounded-lg p-4 mr-8">
            <div className="flex">
                <div className="w-9 h-9 flex items-center justify-center cursor-pointer bg-[#FAE086] rounded-full my-2
                mr-4 ">
                    {icon}
                </div>
                <div>
                    <h1 className="font-bold text-lg">{number}</h1>
                    <p className="text-sm ">{infoName}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemOfInfoSection;
