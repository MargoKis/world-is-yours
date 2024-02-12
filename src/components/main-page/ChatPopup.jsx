import React, { useState } from "react";
import styles from "./main.module.css";
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
  const [textArea, setTextArea] = useState("");
  const [textAreaError, setTextAreaError] = useState("");

  const resetErrors = () => {
    setNameError("");
    setEmailError("");
    setThemeError("");
    setTextAreaError("");
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const nameSurnameRegex = /^[^\d\s]{3,16}$/;
  const themeRegex = /^[^\d\s]{5,20}$/;

  const validateName = (value) => {
    if (!value.trim()) {
      setNameError("Name and surname cannot be empty");
    } else if (!nameSurnameRegex.test(value)) {
      setNameError(
        "Name and surname should be 3-16 characters long and should not contain numbers"
      );
    } else {
      setNameError("");
    }
  };
  
  const validateTheme = (value) => {
    if (!value.trim()) {
      setThemeError("Theme cannot be empty");
    } else if (!themeRegex.test(value)) {
      setThemeError(
        "Theme should be 6-20 characters long and should not contain numbers"
      );
    } else {
      setThemeError("");
    }
  };
  
  const validateEmailOnChange = (value) => {
    if (!value.trim()) {
      setEmailError("Email cannot be empty");
    } else if (!validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  
  const validateTextArea = (value) => {
    if (!value.trim()) {
      setTextAreaError("Text cannot be empty");
    } else if (value.length < 10) {
      setTextAreaError("Text should be at least 10 characters long");
    } else {
      setTextAreaError("");
    }
  };

  const validateSignUpForm = () => {
    resetErrors();

    if (!nameSurnameRegex.test(name)) {
      setNameError(
        "Name and surname should be 3-16 characters long and should not contain numbers"
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

    if (textArea.length < 10) {
      setTextAreaError("Text should be at least 10 characters long");
      return false;
    }

    onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={`${styles.popup} ${isOpen ? styles.open : ""}`}
          onClick={(e) => e.stopPropagation()}
          style={{ top: "8%", left: 520 }}
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
          <form className={styles.form} onSubmit={(e) => { e.preventDefault(); validateSignUpForm(); }}>
            <label
              htmlFor="name"
              className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
            >
              Ім'я та прізвище
            </label>
            <Input
              classNameInput={styles.input}
              typeInput="text"
              id="name"
              nameInput="name"
              valueInput={name}
              placeholderInput="Введіть свої ім'я та прізвище"
              onChangeInput={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
              required
            />
            <div className={styles.error}>{nameError}</div>

            <label
              htmlFor="email"
              className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
            >
              Електронна пошта
            </label>
            <Input
              classNameInput={styles.input}
              typeInput="email"
              id="email"
              nameInput="email"
              value={email}
              placeholderInput="Введіть свою електронну пошту"
              onChangeInput={(e) => {
                setEmail(e.target.value);
                validateEmailOnChange(e.target.value);
              }}
              required
            />
            <div className={styles.error}>{emailError}</div>

            <label
              htmlFor="theme"
              className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
            >
              Тема повідомлення
            </label>
            <Input
              classNameInput={styles.input}
              typeInput="text"
              id="theme"
              nameInput="theme"
              valueInput={theme}
              placeholderInput="Введіть тему повідомлення"
              onChangeInput={(e) => {
                setTheme(e.target.value);
                validateTheme(e.target.value);
              }}
              required
            />
            <div className={styles.error}>{themeError}</div>

            <label
              htmlFor="textArea"
              className="mb-1 ml-1 text-textLight font-medium font-raleway text-sm"
            >
              Текст повідомлення
            </label>
            <textarea
              className={styles.textarea}
              maxLength={100}
              placeholder="Опишіть проблему, з якою звертаєтесь"
              value={textArea}
              onChange={(e) => {
                setTextArea(e.target.value);
                validateTextArea(e.target.value);
              }}
              required
            ></textarea>
            <div className={styles.error}>{textAreaError}</div>

            <Button
              classNameBtn={styles.btn}
              type="button"
              onClick={validateSignUpForm}
            >
              Відправити
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatPopup;
