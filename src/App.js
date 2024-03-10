import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { useDispatch } from "react-redux";
import { setLocale, setLanguage } from "./redux/localeSlice";
import api from "./api/api";
import Footer from "./components/common/Footer";
import DonateBanner from "./components/common/DonateBanner";
import Header from "./components/common/Header";
import Loader from "./components/common/Loader";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import PasswordRecovery from "./pages/PasswordRecovery";
import ProductPage from "./pages/ProductPage";
import Contacts from "./pages/Contacts";
import CategoryPage from "./pages/CategoryPage";
import AdminPanel from "./admin/components/common/AdminPanel";

const PaymentPage = React.lazy(() => import("./pages/PaymentPage"));
const InfoPayment = React.lazy(() => import("./pages/InfoHelp"));
const NotFound404 = React.lazy(() => import("./pages/NotFound404"));

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLanguagueLoad, setLanguagueLoad] = useState(false);
  const [showHeaderFooter, setShowHeaderFooter] = useState(true);

  useEffect(() => {
    const userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    const preferredLanguage = userLanguages.find(language => ["en", "uk"].includes(language)) || "en";

    dispatch(setLocale({ locale: preferredLanguage }));
  }, [dispatch]);

  useEffect(() => {
    const getLanguage = async () => {
      try {
        const data = await api.getLanguage("en"); // Предположим, что мы всегда запрашиваем язык "en" при первой загрузке.
        dispatch(setLanguage({ language: data }));
        setLanguagueLoad(true);
      } catch (error) {
        console.error("Error in useTranslation:", error);
        setTimeout(() => {
          setLanguagueLoad(true);
        }, 2000);
      }
    };
    getLanguage();
  }, [dispatch]);

  useEffect(() => {
    setShowHeaderFooter(!location.pathname.startsWith("/admin"));
  }, [location]);

  return (
    <Suspense fallback={<Loader />}>
      {isLanguagueLoad ? null : <Loader />}
      {showHeaderFooter && <DonateBanner />}
      {showHeaderFooter && <Header />}
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/info-help" element={<InfoPayment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      {showHeaderFooter && <Footer />}
    </Suspense>
  );
}

export default App;
