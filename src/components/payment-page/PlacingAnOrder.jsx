import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import DeliveryInfo from "./DeliveryInfo";

const PlaycingAnOrder = () => {
  const [showDeliveryInfo, setShowDeliveryInfo] = useState(false);

  const handleDeliveryClick = () => {
    setShowDeliveryInfo(true);
  };

  const handleContactInfoClick = () => {
    setShowDeliveryInfo(false);
  };

  return (
    <div>
      {showDeliveryInfo ? (
        <DeliveryInfo
          handleContactInfoClick={handleContactInfoClick}
          handleDeliveryClick={handleDeliveryClick}
        />
      ) : (
        <ContactInfo
          handleContactInfoClick={handleContactInfoClick}
          handleDeliveryClick={handleDeliveryClick}
        />
      )}
    </div>
  );
};

export default PlaycingAnOrder;
