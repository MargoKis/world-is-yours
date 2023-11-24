import React from "react";
// import DeliveryInfo from '../components/payment-page/DeliveryInfo'
// import ContactInfo from '../components/payment-page/ContactInfo'
import UserOrder from "../components/payment-page/UserOrder";
import DonateBanner from "../components/common/DonateBanner";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import PlaycingAnOrder from "../components/payment-page/PlacingAnOrder";
import PreviousPage from "../components/common/PreviousPage";

const PaymentPage = () => {
  
  return (
    <>
      <DonateBanner />
      <Header />
      <PreviousPage>Кошик</PreviousPage>
       <div className="flex flex-row justify-center gap-32 mt-20 mb-20"> 
        <PlaycingAnOrder />
        <UserOrder />
      </div> 
      <Footer />
    </>
  );
};

export default PaymentPage;
