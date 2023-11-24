import React, { useState } from "react";
import { useEffect } from "react";
import styles from "./signup.module.css";
import Input from "../common/Input";
import Button from "../common/Button";

const RemindPas = ({ isOpen, onClose, openLogin }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const resetErrors = () => {
    setEmailError("");
  };

  const validateSignUpForm = () => {
    resetErrors();

    if (!validateEmail(email)) {
      setEmailError("Invalid email address");
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
            <h2 className={styles.title}>Нагадати пароль</h2>
            <form
              className={styles.form}
              onSubmit={(e) => e.preventDefault() || validateSignUpForm()}
            >
              <label htmlFor="email"></label>
              <Input
                classNameInput={styles.input}
                typeInput="email"
                id="email"
                nameInput="email"
                value={email}
                placeholderInput="Ел.пошта"
                onChangeInput={(e) => setEmail(e.target.value)}
                required
              />
              <div className={styles.error}>{emailError}</div>

              <p className={styles.remindPas}>Нагадати пароль</p>
              <Button classNameBtn={styles.btn} type="submit">
                Надіслати код
              </Button>
              <p style={{ color: "#202020" }}>
                 Згадали пароль?{" "}
                <span
                  style={{ textDecoration: "underline", color: "#888888", cursor: 'pointer' }}
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

export default RemindPas;
