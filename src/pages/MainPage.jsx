import React, {useState} from 'react';
import ArrowIcon from '../assets/icons/icon-arrow.svg'
import ChatIcon from '../assets/icons/button_chat.svg'
import Categories from "../components/Categories";
import DonateBanner from "../components/DonateBanner";
import Header from "../components/Header";

function MainPage() {

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

    return (
        <div className='h-screen bg-header bg-cover bg-no-repeat bg-bottom text-white '>
            <DonateBanner/>
            <Header isCategoriesOpen={isCategoriesOpen} setIsCategoriesOpen={setIsCategoriesOpen}/>
            {isCategoriesOpen && <Categories/>}
            <div
                className={`flex flex-col h-2/3 justify-center items-center px-10 ${isCategoriesOpen ? 'hidden' : 'flex'}`}>
                <p className='text-center text-4xl mb-10'>Ваша пригода починається з нами</p>
                <img src={ArrowIcon} alt="Arrow Down"/>
            </div>
            <div
                className={`flex flex-row-reverse items-center px-10 ${isCategoriesOpen ? 'hidden' : 'flex'}`}>
                <img className='scale-75' src={ChatIcon} alt="Arrow Down"/>
            </div>
        </div>
    );
}

export default MainPage;
