import { MainBar , MainPage , Information } from '../index';

const TheFirstPage = () => {
    return (
        <div className='flex'>
            <MainBar />
            <MainPage />
            <Information />
        </div>
    );
}

export default TheFirstPage;
