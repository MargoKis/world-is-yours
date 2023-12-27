import { Routes, Route } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import NotFound404 from "./pages/NotFound404";
import InfoPayment from "./pages/InfoHelp";
import { useDispatch } from "react-redux";
import { setLocale } from "./redux/localeSlice";

function App() {
  const dispatch = useDispatch();


  // Languages switcher
  const availableLanguages = useMemo(() => ["en", "uk", 'ar'], []);

  useEffect(() => {
    const userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];

    const preferredLanguage = userLanguages.find(language => availableLanguages.includes(language));

    const selectedLanguage = preferredLanguage || 'en'; //default

    dispatch(setLocale({ locale: selectedLanguage }));
  }, [availableLanguages, dispatch]);








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
