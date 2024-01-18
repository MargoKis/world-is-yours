import React, { useRef, useState } from "react";
// import { useEffect } from "react";
import styles from "./signup.module.css";
import Input from "../common/Input";
import Button from "../common/Button";
import closeIcon from "../../assets/icons/icon-close.svg";
import Facebook from "../../assets/icons/media-icons/facebook-color.svg";
import Google from "../../assets/icons/media-icons/google-color.svg";
import Apple from "../../assets/icons/media-icons/apple-color.svg";
import { facebookProvider, googleProvider } from "./firebase/provider";
import socialMediaAuth from "./firebase/auth";

import attantionIcon from '../../assets/icons/icon-attantion.svg';
import openEye from '../../assets/icons/icon-openEye.svg';
import closeEye from '../../assets/icons/icon-Eye-off.svg';
// import {auth } from './firebase/config'
// import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useTranslation from "../../locale/locales";
import api from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

const SignUp = ({ onClose, openLogin, openRemindPass, openSuccess }) => {

  const t = useTranslation();
  const dispatch = useDispatch();
  

  const handleOnClick = async (provider) => {
    await socialMediaAuth(provider)
  }





  // inputs
  const [username, setUsername] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // errors 
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  // states
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);

  // password visible
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  // is validation on
  const isValidationOnRef = useRef(false);


  // name validation
  const nameValidation = (name) => {
    if (isValidationOnRef.current) {
      if (!name.trim()) {
        setNameError('Ім\'я обов\'язкове');
      } else if (/^\s/.test(name)) {
        setNameError('Пароль не може починатися з пробілу');
      } else if (name.length < 2 || name.length > 32) {
        setNameError('Ім\'я повинно бути від 2 до 32 символів');
      } else if (!/^[a-zA-Z' -]+$/.test(name)) {
        setNameError('Ім\'я містить не припустимі символи');
      } else {
        setNameError(null);
        return true;
      }
    }
  }


  // surname validation
  const surnameValidation = (surname) => {
    if (isValidationOnRef.current) {
      if (!surname.trim()) {
        setSurnameError('Прізвище обов\'язкове');
      } else if (/^\s/.test(surname)) {
        setSurnameError('Пароль не може починатися з пробілу');
      } else if (surname.length < 2 || surname.length > 32) {
        setSurnameError('Прізвище повинно бути від 2 до 32 символів');
      } else if (!/^[a-zA-Z' -]+$/.test(surname)) {
        setSurnameError('Прізвище містить не припустимі символи');
      } else {
        setSurnameError(null);
        return true;
      }
    }
  }



  // Email validation
  const emailValidation = (email) => {
    if (isValidationOnRef.current) {
      if (!email.trim()) {
        setEmailError('Емейл обов\'язковий');
        // empty
      } else if (/^\s/.test(email)) {
        setEmailError('Пароль не може починатися з пробілу');
      } else if (email.length < 5 || email.length > 32) {
        setEmailError('Не вірно введений емейл');
        // leght
      } else if (!/@/.test(email) || !/\./.test(email)) {
        setEmailError('Не вірно введений емейл');
        // have @ and .
      } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/.test(email)) {
        setEmailError('Не вірно введений емейл');
        // incorrect characters
      } else if (!/[a-zA-Z]{2,}$/.test(email.split('@')[1])) {
        setEmailError('Мінімум дві літери після крапки');
        // At least two letters after the period
      } else if (/@\./.test(email)) {
        setEmailError('Символ "." не може йти одразу після символу "@"');
        // The "." character cannot follow the "@" character.

      } else {
        setEmailError(null);
        return true;
      }
    }
  };



  // password validation
  const passwordValidation = (password) => {
    if (isValidationOnRef.current) {
      if (!password.trim()) {
        setPasswordError('Пароль обов\'язковий');
      } else if (/^\s/.test(password)) {
        setPasswordError('Пароль не може починатися з пробілу');
      } else if (password.length < 6 || password.length > 32) {
        setPasswordError('Пароль повиннен бути від 2 до 32 символів');
      } else if (!/^[a-zA-Z0-9@#$%^&_+]+$/.test(password)) {
        setPasswordError('Пароль містить не припустимі символи');
      } else {
        setPasswordError(null);
        return true;
      }
    }
  };



  // valid all
  const validateSignUpForm = () => {
    return (
      nameValidation(username) &&
      surnameValidation(userSurname) &&
      emailValidation(userEmail) &&
      passwordValidation(userPassword)
    );
  };

  // submit
  const submit = (e) => {
    e.preventDefault();
    isValidationOnRef.current = true;
    if (validateSignUpForm()) {
      handleRegistration()
    }
  }






  // Registration status answear
  const handleRegistrationStatus = (status) => {
    // status message
    const statusMessages = {
      201: 'Registration successful',
      400: 'User already exists',
    };

    if (statusMessages.hasOwnProperty(status)) {
      // log status
      console.log(statusMessages[status]);

      // status
      switch (status) {
        case 201:
          openSuccess();
          dispatch(login());

          break;
        case 400:
          // console.log("already exist");
          break;

        default:
          break;
      }
    } else {
      // undefinded status error
      console.log(`Unexpected response status: ${status}`);
    }
  };



  const handleRegistration = async () => {
    try {
      const userData = {
        username: username,
        first_name: username,
        last_name: userSurname,
        password: userPassword,
        confirm_password: userPassword,
        email: userEmail,
      };

      const registrationResult = await api.signUp(userData);
      handleRegistrationStatus(registrationResult.status);
      // console.log('Registration successful:', registrationResult);
    } catch (error) {
      handleRegistrationStatus(error.response.status);
      // console.error('Error during registration in signUp:', error);
    }
  };




  return (
    <>

      <div className={styles.overlay} onClick={onClose}>
        <div
          className={`${styles.popup} ${styles.open}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>{t("Registration")}</h2>
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="close icon"
              onClick={onClose}
            />
          </div>
          <form noValidate
            className={styles.form}
            onSubmit={(e) => submit(e)}
          >


            {/* username */}
            <div className={styles.container}>
              <label className={styles.label} htmlFor="name">{t("Name")}</label>
              <div className={styles.inputContainer}>
                <Input
                  classNameInput={styles.input}
                  typeInput="text"
                  id="name"
                  nameInput="name"
                  valueInput={username}
                  placeholderInput={t("Enter your name")}
                  onChangeInput={(e) => {
                    setUsername(e.target.value);
                    nameValidation(e.target.value);
                  }}
                  required
                />
                {nameError ? <div className={styles.error}>{nameError}</div> : null}
                {nameError ? <img className={styles.attantion} src={attantionIcon} alt="attantion" /> : null}
              </div>
            </div>



            {/* surname */}
            <div className={styles.container}>
              <label className={styles.label} htmlFor="surname">{t("Surname")}</label>
              <div className={styles.inputContainer}>
                <Input
                  classNameInput={styles.input}
                  typeInput="text"
                  id="surname"
                  nameInput="surname"
                  valueInput={userSurname}
                  placeholderInput={t("Enter your last name")}
                  onChangeInput={(e) => {
                    setUserSurname(e.target.value);
                    surnameValidation(e.target.value);
                  }}
                  required
                />
                {surnameError ? <div className={styles.error}>{surnameError}</div> : null}
                {surnameError ? <img className={styles.attantion} src={attantionIcon} alt="attantion" /> : null}
              </div>
            </div>



            {/* email */}
            <div className={styles.container}>
              <label className={styles.label} htmlFor="email">{t("Email")}</label>
              <div className={styles.inputContainer}>
                <Input
                  classNameInput={styles.input}
                  typeInput="email"
                  id="email"
                  nameInput="email"
                  value={userEmail}
                  placeholderInput={t("Enter your email address")}
                  onChangeInput={(e) => {
                    setUserEmail(e.target.value);
                    emailValidation(e.target.value);
                  }}
                  required
                />
                {emailError ? <div className={styles.error}>{emailError}</div> : null}
                {emailError ? <img className={styles.attantion} src={attantionIcon} alt="attantion" /> : null}
              </div>
            </div>


            {/* password */}
            <div className={styles.container}>
              <label className={styles.label} htmlFor="password">{t("Password")}</label>
              <div className={styles.passwordContainer}>
                <div className={styles.inputContainer}>
                  <Input
                    classNameInput={styles.input}
                    typeInput={isPasswordVisible ? "text" : "password"}
                    id="password"
                    nameInput="password"
                    value={userPassword}
                    placeholderInput={t("Create a password")}
                    onChangeInput={(e) => {
                      setUserPassword(e.target.value);
                      passwordValidation(e.target.value);
                    }}
                    required
                  />
                  {passwordError ? <div className={styles.error}>{passwordError}</div> : null}
                  {passwordError ? <img className={styles.attantion} src={attantionIcon} alt="attantion" /> : null}
                </div>
                {/* icon eyes */}
                <div className={styles.eyesIcon} onClick={() => setPasswordVisible(!isPasswordVisible)}>
                  <img className="w-24px h-24px" src={isPasswordVisible ? openEye : closeEye} alt="openEyes" />
                </div>

              </div>
            </div>

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

    </>
  );
};

export default SignUp;
