import React, { useRef, useState } from 'react';
import styles from './signup.module.css';
import Input from '../common/Input';
import Button from '../common/Button';
import closeIcon from '../../assets/icons/icon-close.svg';
import useTranslation from '../../locale/locales';

import attentionIcon from '../../assets/icons/icon-attention.svg';

import { api2 } from '../../api/api';

const RemindPas = ({ onClose, openLogin, openSuccess }) => {
  const t = useTranslation();
  // inputs
  const [userEmail, setUserEmail] = useState('');

  // errors
  const [emailError, setEmailError] = useState('');

  // states

  // is validation on
  const isValidationOnRef = useRef(false);

  // Email validation
  const emailValidation = (email) => {
    if (isValidationOnRef.current) {
      if (!email.trim()) {
        setEmailError("Емейл обов'язковий");
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

  // valid all
  const validateResetPasswordForm = () => {
    return emailValidation(userEmail);
  };

  // submit
  const submit = (e) => {
    e.preventDefault();
    isValidationOnRef.current = true;
    if (validateResetPasswordForm()) {
      handleResetPassword();
    }
  };

  // SIgnIn status answear
  const handleResetPasswordStatus = (status) => {
    // status message
    const statusMessages = {
      200: 'ResetPassword successful',
      400: 'User already exists',
    };

    if (statusMessages.hasOwnProperty(status)) {
      // log status
      console.log(statusMessages[status]);

      // status
      switch (status) {
        case 201:
          openSuccess();

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

  const handleResetPassword = async () => {
    try {
      const userData = {
        email: userEmail,
      };

      const resetPasswordResult = await api2.resetPassword(userData);
      handleResetPasswordStatus(resetPasswordResult.status);
      // console.log('signIn successful:', signInResult);
    } catch (error) {
      handleResetPasswordStatus(error.response.status);
      // console.error('Error during signIn in signIn:', error);
    }
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={`${styles.popup} ${styles.open}`} onClick={(e) => e.stopPropagation()}>
          <div className={styles.titleWrap}>
            <h2 className={styles.title}>Відновлення паролю</h2>
            <img className={styles.closeIcon} src={closeIcon} alt='close icon' onClick={onClose} />
          </div>
          <form noValidate className={styles.form} onSubmit={(e) => submit(e)}>
            {/* email */}
            <div className={styles.container}>
              <label className={styles.label} htmlFor='email'>
                {t('Email')}
              </label>
              <div className={styles.inputContainer}>
                {emailError && <img className={styles.attention} src={attentionIcon} alt='attention' />}
                {emailError && <div className={styles.error}>{emailError}</div>}
                <Input
                  classNameInput={styles.input}
                  typeInput='email'
                  id='email'
                  nameInput='email'
                  value={userEmail}
                  placeholderInput={t('Enter your email address')}
                  onChangeInput={(e) => {
                    setUserEmail(e.target.value);
                    emailValidation(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <Button classNameBtn={styles.remind} type='submit'>
              Відправити лист на пошту
            </Button>
            <span style={{ textDecoration: 'underline', color: '#888888', cursor: 'pointer' }} onClick={openLogin}>
              Увійдіть
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default RemindPas;
