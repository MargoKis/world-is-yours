import { Routes, Route } from "react-router-dom";
import React, { useEffect, useMemo } from "react";
import MainPage from "./pages/MainPage";
import PaymentPage from "./pages/PaymentPage";
import NotFound404 from "./pages/NotFound404";
import InfoPayment from "./pages/InfoHelp";
import { useDispatch, useSelector } from "react-redux";
import { setLocale, setLanguage } from "./redux/localeSlice";
import api from "./api/api";
import Footer from "./components/common/Footer";
import DonateBanner from "./components/common/DonateBanner";
import Header from "./components/common/Header";

function App() {

  const dispatch = useDispatch();


  // language switcher
  const availableLanguages = useMemo(() => ["en", "uk"], []);

  useEffect(() => {
    const userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    const preferredLanguage = userLanguages.find(language => availableLanguages.includes(language));

    const selectedLanguage = preferredLanguage || 'en'; //default

    dispatch(setLocale({ locale: selectedLanguage }));
  }, [availableLanguages, dispatch]);

  const locale = useSelector((state) => state.locale.locale);

  useEffect(() => {

    api.getLanguage(locale)
      .then(data => dispatch(setLanguage({ language: data })))
      .catch(error => console.error('Error in useTranslation:', error));
  }, [locale, dispatch]);









  return (
    <>
      <DonateBanner />
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/info-help" element={<InfoPayment />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
