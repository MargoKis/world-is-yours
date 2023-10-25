import React, {useState} from 'react';
import ArrowIcon from '../assets/icons/icon-arrow.svg'
import ChatIcon from '../assets/icons/button_chat.svg'
import Categories from "../components/Categories";
import DonateBanner from "../components/DonateBanner";
import Header from "../components/Header";
import WhyUs from "../components/WhyUs";
import SeasonSelect from "../components/common/SeasonSelect";
import CardList from "../components/common/CardList";
import ScrollingText from "../components/common/scrolling-effect/ScrollingText";
import Footer from "../components/common/Footer";

function MainPage() {

    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)

    return (
         <div className='h-screen bg-header bg-cover bg-no-repeat bg-bottom text-white'>
             <div className={`h-full ${isCategoriesOpen ? 'backdrop-blur-sm' : 'backdrop-blur-none'}`}>
                 <div className='h-1/5'>
                     <DonateBanner/>
                     <Header isCategoriesOpen={isCategoriesOpen} setIsCategoriesOpen={setIsCategoriesOpen}/>
                 </div>
                 {isCategoriesOpen && <Categories/>}
                 <div
                     className={`flex flex-col h-3/5 justify-center items-center px-10 ${isCategoriesOpen ? 'hidden' : 'flex'}`}>
                     <p className='text-center text-4xl mb-10'>Ваша пригода починається з нами</p>
                     <img className='animate-bounce' src={ArrowIcon} alt="Arrow Down"/>
                 </div>
                 <div
                     className={`flex flex-row-reverse h-1/5 items-center px-10 ${isCategoriesOpen ? 'hidden' : 'flex'}`}>
                     <img className='scale-75' src={ChatIcon} alt="Arrow Down"/>
                 </div>
             </div>
             <SeasonSelect/>
             <CardList/>
             <ScrollingText/>
             <CardList/>
             <WhyUs/>
             <Footer/>
         </div>

    );
}

export default MainPage;
