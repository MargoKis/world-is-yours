import React, { useState } from "react";
import styles from "./popup.module.css";
import Input from "../common/Input";
import closeIcon from "../../assets/icons/icon-close.svg";
import Button from "../common/Button";

const ChatPopup = ({ onClose, isOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [theme, setTheme] = useState("");
  const [themeError, setThemeError] = useState("");

  const resetErrors = () => {
    setNameError("");
    setEmailError("");
    setThemeError("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const nameSurnameRegex = /^[^\d\s]{3,16}$/;

  const themeRegex = /^[^\d\s]{5,20}$/;

  const validateSignUpForm = () => {
    resetErrors();

    if (!nameSurnameRegex.test(name)) {
      setNameError(
        "Full name should be 3-16 characters long and should not contain numbers"
      );
      return false;
    }

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return false;
    }

    if (!themeRegex.test(theme)) {
      setThemeError(
        "Theme should be 6-20 characters long and should not contain numbers"
      );
      return false;
    }

    return true;
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={`${styles.popup} ${isOpen ? styles.open : ""}`}
          onClick={(e) => e.stopPropagation()}
          style={{ top: '8%', left: 520 }}
        >
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>Зв’яжіться з нами!</h2>
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
              placeholderInput="Ім'я Прізвище"
              onChangeInput={(e) => {
                setName(e.target.value);
                validateSignUpForm();
              }}
              required
            />
            <div className={styles.error}>{nameError}</div>

            <label htmlFor="theme"></label>
            <Input
              classNameInput={styles.input}
              typeInput="text"
              id="theme"
              nameInput="theme"
              valueInput={theme}
              placeholderInput="Тема повідомлення"
              onChangeInput={(e) => {
                setTheme(e.target.value);
                validateSignUpForm();
              }}
              required
            />
            <div className={styles.error}>{themeError}</div>

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
                validateSignUpForm();
              }}
              required
            />
            <div className={styles.error}>{emailError}</div>

            <textarea className={styles.textarea}
              maxLength={100} 
              placeholder="Текст повідомлення"
            ></textarea>

            <Button classNameBtn={styles.btn} type="submit">
              Відправити
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatPopup;
