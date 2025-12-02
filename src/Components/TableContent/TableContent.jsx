import {ManagementTable} from "../index"
import { FaCircle } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { MdFilePresent } from "react-icons/md";
const TableContent = () => {
    return (
        <div>
            <div className="mt-4 mr-8">
            <table className="table w-full border-collapse mx-3 text-sm ">
                <thead>
                    <tr className=" bg-purple-600 border items-center ">
                        <th className="border p-2">Report Title</th>
                        <th className="border p-2">Submitted By</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Submission Date</th>
                        <th className="border p-2">Reports</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-yellow-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px]">Pending</p>
                            </span>}
                        Submission_Date={
                            <span className="flex items-center gap-2"><MdOutlineDateRange/>Oct 22.2025
                            </span>}
                        Reports="Not Found"
                        Action2={<span className="text-red-500">Send Reminder</span>}/>

                    <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-green-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px] ">Submitted</p>
                            </span>}
                        Submission_Date={
                                <span className="flex items-center gap-2">
                                    <MdOutlineDateRange/>Oct 22.2025
                                </span>}
                        Reports={
                            <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold">
                                <MdFilePresent className="text-[15px]"/>
                                View Report
                            </span>}
                        Action1="Approve"
                        Action2={<span className="text-gray-500">Request Revision</span>}
                        />

                        <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-red-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px]">Late</p>
                            </span>}
                        Submission_Date={
                            <span className="flex items-center gap-2"><MdOutlineDateRange/>Oct 22.2025
                            </span>}
                        Reports="Not Found"
                        Action2={<span className="text-red-500">Send Reminder</span>}
                        />


                                            <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-green-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px] ">Submitted</p>
                            </span>}
                        Submission_Date={
                                <span className="flex items-center gap-2">
                                    <MdOutlineDateRange/>Oct 22.2025
                                </span>}
                        Reports={
                            <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold">
                                <MdFilePresent className="text-[15px]"/>
                                View Report
                            </span>}
                        Action1="Approve"
                        Action2={<span className="text-gray-500">Request Revision</span>}
                        />

                                            <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-green-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px] ">Submitted</p>
                            </span>}
                        Submission_Date={
                                <span className="flex items-center gap-2">
                                    <MdOutlineDateRange/>Oct 22.2025
                                </span>}
                        Reports={
                            <span className="flex items-center gap-1 text-[10px] text-gray-500 font-bold">
                                <MdFilePresent className="text-[15px]"/>
                                View Report
                            </span>}
                        Action1="Approve"
                        Action2={<span className="text-gray-500">Request Revision</span>}
                        />

                        
                        <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-red-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px]">Late</p>
                            </span>}
                        Submission_Date={
                            <span className="flex items-center gap-2"><MdOutlineDateRange/>Oct 22.2025
                            </span>}
                        Reports="Not Found"
                        Action2={<span className="text-red-500">Send Reminder</span>}
                        />

                        <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-yellow-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px]">Pending</p>
                            </span>}
                        Submission_Date={
                            <span className="flex items-center gap-2"><MdOutlineDateRange/>Oct 22.2025
                            </span>}
                        Reports="Not Found"
                        Action2={<span className="text-red-500">Send Reminder</span>}/>

                        <ManagementTable
                        Report_Title="Report Title"
                        Submitted_By="Username"
                        Status={
                            <span className="flex items-center gap-2 text-red-500 text-[10px] font-bold">
                                <FaCircle/>
                                <p className="text-[13px]">Late</p>
                            </span>}
                        Submission_Date={
                            <span className="flex items-center gap-2"><MdOutlineDateRange/>Oct 22.2025
                            </span>}
                        Reports="Not Found"
                        Action2={<span className="text-red-500">Send Reminder</span>}
                        />
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default TableContent;
