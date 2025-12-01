
const TableElement = ({Member , Role , Level , Last_Active}) => {
    return (
            <tr className="border-b">
                        <td className="border p-2 font-bold font-bold">{Member}</td>
                        <td className="border p-2">{Role}</td>
                        <td className="border p-2">{Level}</td>
                        <td className="border p-2">{Last_Active}</td>
                        <td className="p-2 flex gap-4 border-r">
                            <button className="underline ">View Profile</button>
                            <button className="text-red-600 underline">Remove</button>
                        </td>
            </tr>

    );
}

export default TableElement;
