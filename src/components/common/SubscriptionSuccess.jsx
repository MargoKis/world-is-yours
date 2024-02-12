import React from 'react';
import Button from './Button';
import styles from '../main-page/main.module.css';

const SubscriptionSuccess = ({ onClose, isOpen, clearInput }) => {
  const handlePopupClick = (e) => {
    e.stopPropagation();
  };

  const handleButtonClick = () => {
    onClose();
    clearInput(); 
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div
          className={`${styles.popupSuccess} ${isOpen ? styles.open : ''}`}
          onClick={handlePopupClick}
        >
          <div className={styles.titleWrap}>
            <h2 className={styles.titleLeft}>Дякуємо за підписку на нашу розсилку!</h2>
          </div>
          <div className={styles.content}>
            <p>Тепер ви будете отримувати свіжі новини, акції та оновлення. Залишайтеся з нами!</p>
            <Button
              classNameBtn={styles.btn}
              type="button"
              onClick={handleButtonClick}
            >
              Повернутися до покупок
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionSuccess;
