import React from "react";
import UserOrder from "../components/payment-page/UserOrder";
import PlacingAnOrder from "../components/payment-page/PlacingAnOrder";
import PreviousPage from "../components/common/PreviousPage";

const PaymentPage = () => {
  return (
    <>
      <PreviousPage>Кошик</PreviousPage>
      <div className="flex flex-row flex-wrap justify-center gap-36 mt-14 mb-20">
        <PlacingAnOrder />
        <UserOrder />
      </div>
    </>
  );
};

export default PaymentPage;
