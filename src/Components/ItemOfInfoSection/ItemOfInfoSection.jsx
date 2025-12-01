
const ItemOfInfoSection = ({icon , number , infoName , border_color, bg_Color , text_color}) => {
    return (
        <div className={`border-b-4 ${border_color} rounded-lg p-4 mr-8`}>
            <div className="flex">
                <div className={`w-9 h-9 flex items-center justify-center cursor-pointer ${text_color} ${bg_Color} rounded-full my-2
                mr-4  `}>
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
