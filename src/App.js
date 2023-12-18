import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import NotFound404 from "./pages/NotFound404";
import InfoPayment from "./pages/InfoHelp";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/info-help" element={<InfoPayment/>} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
