import { Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import NotFound404 from "./pages/NotFound404";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
