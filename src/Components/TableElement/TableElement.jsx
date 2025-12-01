
const TableElement = ({Member , Role , Level , Last_Active , Action1 , Action2}) => {
    return (
            <tr className="border-b">
                        <td className="border p-2 font-bold font-bold">{Member}</td>
                        <td className="border p-2">{Role}</td>
                        <td className="border p-2">{Level}</td>
                        <td className="border p-2">{Last_Active}</td>
                        <td className="p-2 flex gap-4 border-r">
                            <button className="underline ">{Action1}</button>
                            <button className="text-red-600 underline">{Action2}</button>
                        </td>
            </tr>

    );
}

export default TableElement;
