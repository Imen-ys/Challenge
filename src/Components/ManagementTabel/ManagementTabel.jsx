
const ManagementTable = ({Report_Title , Submitted_By , Status , Submission_Date ,Reports, Action1 , Action2}) => {
    return (
            <tr className="border-b">
                        <td className="border p-2 font-bold font-bold text-center">{Report_Title}</td>
                        <td className="border p-2 text-center">{Submitted_By}</td>
                        <td className="border p-2 text-center">{Status}</td>
                        <td className="border p-2 justify-center">{Submission_Date}</td>
                        <td className="border p-2 text-gray-500 text-center">{Reports}</td>
                        <td className="p-2 flex gap-4 border-r">
                            <button className="text-green-600  text-center ">{Action1}</button>
                            <button className="text-center">{Action2}</button>
                        </td>
            </tr>

    );
}

export default ManagementTable;
