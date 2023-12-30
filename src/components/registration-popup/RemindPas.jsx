import React, { useState } from "react";
import styles from "./signup.module.css";
import Input from "../common/Input";
import Button from "../common/Button";
import closeIcon from "../../assets/icons/icon-close.svg";


const RemindPas = ({ onClose, openLogin, openSuccess }) => {
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

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto";
  //   }
  //   resetErrors();
  // }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateSignUpForm()) {
      onClose();
      openSuccess();
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
            <h2 className={styles.title}>Відновлення паролю</h2>
            <img className={styles.closeIcon} src={closeIcon} alt="close icon" onClick={onClose} />
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
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
            <Button classNameBtn={styles.remind} type="submit">
              Надіслати лист
            </Button>
            <p style={{ color: "#202020" }}>
              Згадали пароль?{" "}
              <span
                style={{ textDecoration: "underline", color: "#888888", cursor: "pointer" }}
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

export default RemindPas;