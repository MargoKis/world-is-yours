import React, { useState, useEffect } from 'react';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import SideLinks from "../components/info-payment/SideLinks";
import Payment from "../components/info-payment/Payment";
import DonateBanner from "../components/common/DonateBanner";
import Return from "../components/info-payment/Return";
import Delivery from "../components/info-payment/Delivery";

const InfoPayment = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentClick = (component) => {
    setSelectedComponent(component);
  };

  useEffect(() => {
    setSelectedComponent('payment');
  }, []);

  return (
    <>
      <DonateBanner />
      <Header />
      <div className="flex flex-col">
        <div className="text-custom-black text-35px font-semibold mx-32 mt-12">Довідка</div>
        <div className="flex flex-row mx-32 mb-20 mt-12">
          <SideLinks onLinkClick={handleComponentClick} />
          {selectedComponent === 'payment' && <Payment />}
          {selectedComponent === 'delivery' && <Delivery />}
          {selectedComponent === 'return' && <Return />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InfoPayment;