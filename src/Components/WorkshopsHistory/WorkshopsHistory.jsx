import {Title} from '../index'
import { CiCalendarDate } from "react-icons/ci";

const WorkshopsHistory = () => {
    return (
        <div>
            <Title Title={"Workshops History"}/>
<table className="table text-sm w-full mt-2 border-collapse">
        <thead>
            <tr className="table-danger">
                <th scope="col">Event Name</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Attendes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>

            <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>

                        <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>

                        <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>

                        <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>

            <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>

            <tr>
                <th scope="row">Event Name</th>
                <td>Event Type</td>
                <td className='flex'><CiCalendarDate className="mt-1 mr-1" />Oct 22,2025</td>
                <td>12</td>
            </tr>
            
        </tbody>
        </table>

        </div>
    );
}

export default WorkshopsHistory;
