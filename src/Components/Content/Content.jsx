import { MainBar , ContentManagement , InformationContent } from '../index';
const Content = () => {
    return (
        <div className="flex w-full">
            <MainBar />
            <ContentManagement/>
            <InformationContent />
        </div>
    );
}

export default Content;
