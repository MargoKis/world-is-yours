import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import DeliveryInfo from "./DeliveryInfo";
import PayInfo from "./PayInfo";

const PlacingAnOrder = () => {
  const [step, setStep] = useState(1);

  const handleDeliveryClick = () => {
    setStep(2);
  };

  const handleContactInfoClick = () => {
    setStep(1);
  };

  const handlePayClick = () => {
    setStep(3);
  };

  return (
    <div>
      {step === 1 && (
        <ContactInfo
          handleContactInfoClick={handleContactInfoClick}
          handleDeliveryClick={handleDeliveryClick}
          handlePayClick={handlePayClick}
        />
      )}
      {step === 2 && (
        <DeliveryInfo
          handleContactInfoClick={handleContactInfoClick}
          handleDeliveryClick={handleDeliveryClick}
          handlePayClick={handlePayClick}
        />
      )}
      {step === 3 && (
        <PayInfo
          handleContactInfoClick={handleContactInfoClick}
          handleDeliveryClick={handleDeliveryClick}
        />
      )}
    </div>
  );
};

export default PlacingAnOrder;
