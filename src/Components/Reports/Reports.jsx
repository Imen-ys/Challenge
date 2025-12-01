import {MainBar, ReportsMangement , InformationReports } from '../index'
const Reports = () => {
    return (
        <div className="flex w-full">
            <MainBar />
            <ReportsMangement/>
            <InformationReports/>
        </div>
    );
}

export default Reports;
