import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./signup.module.css";
import Input from "../common/Input";
import Button from "../common/Button";
import closeIcon from "../../assets/icons/icon-close.svg";
import Facebook from "../../assets/icons/media-icons/facebook-color.svg";
import Google from "../../assets/icons/media-icons/google-color.svg";
import Apple from "../../assets/icons/media-icons/apple-color.svg";
import { facebookProvider, googleProvider } from "./firebase/provider";
import socialMediaAuth from "./firebase/auth";
// import {auth } from './firebase/config'
// import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignUp = ({ isOpen, onClose, openLogin, openRemindPass }) => {

  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider)
  }

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telError, setTelError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const resetErrors = () => {
    setNameError("");
    setSurnameError("");
    setTelError("");
    setEmailError("");
    setPasswordError("");
  };

  const validatePhone = (tel) => {
    const regex = /^\d{10,12}$/;
    return regex.test(tel);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const nameSurnameRegex = /^[^\d\s]{3,16}$/;

  const validateSignUpForm = () => {
    resetErrors();

    if (!nameSurnameRegex.test(name)) {
      setNameError(
        "Name should be 3-16 characters long and should not contain numbers"
      );
      return false;
    }

    if (!nameSurnameRegex.test(surname)) {
      setSurnameError(
        "Surname should be 3-16 characters long and should not contain numbers"
      );
      return false;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return false;
    }

    if (!validatePhone(tel)) {
      setTelError("Invalid phone number. Please use format XXX XXX XX XX");
      return false;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={onClose}>
          <div
            className={`${styles.popup} ${isOpen ? styles.open : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.titleWrap}>
              <h2 className={styles.title}>Реєстрація</h2>
              <img
                className={styles.closeIcon}
                src={closeIcon}
                alt="close icon"
                onClick={onClose}
              />
            </div>
            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault() || validateSignUpForm()}
            >
              <label htmlFor="name"></label>
              <Input
                classNameInput={styles.input}
                typeInput="text"
                id="name"
                nameInput="name"
                valueInput={name}
                placeholderInput="Ім'я"
                onChangeInput={(e) => {
                  setName(e.target.value);
                  validateSignUpForm(); // Викликати функцію валідації при зміні значення
                }}
                required
              />
              <div className={styles.error}>{nameError}</div>

              <label htmlFor="surname"></label>
              <Input
                classNameInput={styles.input}
                typeInput="text"
                id="surname"
                nameInput="surname"
                valueInput={surname}
                placeholderInput="Прізвище"
                onChangeInput={(e) => {
                  setSurname(e.target.value);
                  validateSignUpForm(); // Викликати функцію валідації при зміні значення
                }}
                required
              />
              <div className={styles.error}>{surnameError}</div>

              <label htmlFor="tel"></label>
              <Input
                classNameInput={styles.input}
                typeInput="tel"
                id="tel"
                nameInput="tel"
                valueInput={tel}
                placeholderInput="Номер телефону"
                onChangeInput={(e) => {
                  setTel(e.target.value);
                  validateSignUpForm(); // Викликати функцію валідації при зміні значення
                }}
                required
              />
              <div className={styles.error}>{telError}</div>

              <label htmlFor="email"></label>
              <Input
                classNameInput={styles.input}
                typeInput="email"
                id="email"
                nameInput="email"
                value={email}
                placeholderInput="Ел.пошта"
                onChangeInput={(e) => {
                  setEmail(e.target.value);
                  validateSignUpForm(); // Викликати функцію валідації при зміні значення
                }}
                required
              />
              <div className={styles.error}>{emailError}</div>

              <label htmlFor="password"></label>
              <Input
                classNameInput={styles.input}
                typeInput="password"
                id="password"
                nameInput="password"
                value={password}
                placeholderInput="Пароль"
                onChangeInput={(e) => {
                  setPassword(e.target.value);
                  validateSignUpForm(); // Викликати функцію валідації при зміні значення
                }}
                required
              />
              <div className={styles.error}>{passwordError}</div>

              <p className={styles.remindPas} onClick={openRemindPass}>
                Нагадати пароль
              </p>
              <Button classNameBtn={styles.btn} type="submit">
                Зареєструватися
              </Button>

              <div className="flex flex-row justify-between">
                <hr className={styles.line} />
                <p className="text-center text-gray">або за допомогою</p>
                <hr className={styles.line} />
              </div>
              <div className="flex flex-row gap-6 mt-6 mb-6">
                <img
                  src={Facebook}
                  className={styles.mediaIcons}
                  alt="icon facebook"
                  onClick={() => handleOnClick(facebookProvider)}
                />
                <img
                  src={Google}
                  className={styles.mediaIcons}
                  alt="icon google"
                  onClick={() => handleOnClick(googleProvider)}
                />
                <img
                  src={Apple}
                  className={styles.mediaIcons}
                  alt="icon apple"
                />
              </div>

              <p style={{ color: "#202020" }}>
                Вже є акаунт?{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "#888888",
                    cursor: "pointer",
                  }}
                  onClick={openLogin}
                >
                  Увійдіть
                </span>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
