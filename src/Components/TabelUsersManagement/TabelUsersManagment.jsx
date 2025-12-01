import {TableElement} from "../index"
const TabelUsersManagment = () => {
    return (
    <div className="mt-4 mr-8">
            <table className="table w-full border-collapse mx-3 text-sm ">
                <thead>
                    <tr className="border items-center table-primary">
                        <th className="border p-2">Member</th>
                        <th className="border p-2">Role</th>
                        <th className="border p-2">Level</th>
                        <th className="border p-2">Last Active</th>
                        <th className="p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <TableElement Member={"Member's name"} Role={"Leader"} Level={"50 points "} Last_Active={"2 days ago"}/>
                    <TableElement Member={"Member's name"} Role={"Co Leader"} Level={"50 points"} Last_Active={"5 hours ago"}/>
                    <TableElement Member={"Member's name"} Role={"SG"} Level={"50 points"} Last_Active={"1 day ago"}/>
                    <TableElement Member={"Member's name"} Role={"VP"} Level={"50 points"} Last_Active={"3 days ago"}/>
                    <TableElement Member={"Member's name"} Role={"TM"} Level={"50 points "} Last_Active={"2 days ago"}/>
                    <TableElement Member={"Member's name"} Role={"Tech Leader"} Level={"50 points "} Last_Active={"5 hours ago"}/>
                    <TableElement Member={"Member's name"} Role={"Member"} Level={"50 points "} Last_Active={"1 day ago"}/>
                    <TableElement Member={"Member's name"} Role={"Member"} Level={"50 points "} Last_Active={"3 days ago"}/>
                </tbody>

            </table>

        </div>
    );
}

export default TabelUsersManagment;

