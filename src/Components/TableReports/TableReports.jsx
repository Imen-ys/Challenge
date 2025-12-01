import {TableElement} from "../index"
import { FaCircle } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
const TableReports = () => {
    return (
        <div>
            <div className="mt-4 mr-8">
            <table className="table w-full border-collapse mx-3 text-sm ">
                <thead>
                    <tr className="border items-center table-danger">
                        <th className="border p-2">Report Title</th>
                        <th className="border p-2">Submitted By</th>
                        <th className="border p-2">Status</th>
                        <th className="border p-2">Submission Date</th>
                        <th className="border p-2">Reports</th>
                        <th className="p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-yellow-500 ">
                        <FaCircle  />
                        <p>pending</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}
                        Action1={"Send Reminder"}
                        Action2={""}
                        />

                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-green-500 ">
                        <FaCircle  />
                        <p>submitted</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}
                        Action1={"Approve"}
                        Action2={"Request Revision"}
                        />
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-red-500 ">
                        <FaCircle  />
                        <p>late</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}/>
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-green-500 ">
                        <FaCircle  />
                        <p>submitted</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}/>
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-yellow-500 ">
                        <FaCircle  />
                        <p>pending</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}/>
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-green-500 ">
                        <FaCircle  />
                        <p>submitted</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}/>
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-red-500 ">
                        <FaCircle  />
                        <p>late</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}/>
                    <TableElement Member={"Report Title"} Role={"Username"} Level={
                        <span className="flex items-center gap-2 text-green-500 ">
                        <FaCircle  />
                        <p>submitted</p>
                        </span>}
                        Last_Active={<span className="flex items-center gap-2"><MdOutlineDateRange />{"Oct 22,2025"}</span>}/>
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default TableReports;
