import React, {useState} from 'react';
import ArrowIcon from '../assets/icons/icon-arrow.svg'
import ChatIcon from '../assets/icons/button_chat.svg'
import Categories from "../components/common/Categories";
import DonateBanner from "../components/common/DonateBanner";
import Header from "../components/common/Header";
import WhyUs from "../components/main-page/WhyUs";
import SeasonSelect from "../components/main-page/SeasonSelect";
import FavouritesCardList from "../components/main-page/FavouritesCardList";
import NewArrivalsCardList from '../components/main-page/NewArrivalsCardList';
import ScrollingText from "../components/scrolling-effect/ScrollingText";
import Footer from "../components/common/Footer";
// import DeliveryInfo from '../components/payment-page/DeliveryInfo';
// import ContactInfo from '../components/payment-page/ContactInfo';




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
             {/*    в процесі розробки, будуть на іншій сторінці
             <DeliveryInfo />
             <ContactInfo/> */}
             <SeasonSelect/>
             <FavouritesCardList/>
             <ScrollingText/>
             <NewArrivalsCardList/>
             <WhyUs/>
             <Footer/>
         </div>

    );
}

export default MainPage;
