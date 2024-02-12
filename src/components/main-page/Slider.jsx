import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./main.module.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider className={styles.slider} {...settings}>
      <div className={styles.backImgFirst}>
        <div className={styles.cardS}>
          <p className={styles.textS}>СЕЗОННИЙ РОЗПРОДАЖ</p>
        </div>
        <h2 className={styles.titleS}>Зимовий розпродаж -30%</h2>
        <p className={styles.subtitleS}>
          Заощаджуйте на обраному зимовому одязі, <br/> спорядженні та аксесуарах.{" "}
          <br /> До 20.02.2024
        </p>
      </div>
      <div className={styles.backImgSecond}>
        <div className={styles.cardSCenter}>
          <p className={styles.textS}>БЕЗКОШТОВНА ДОСТАВКА</p>
        </div>
        <h2 className={styles.titleSCenter}>Безкоштовна доставка для замовлень від 2000 грн</h2>
        <p className={styles.subtitleS}>
        Подорожуйте з комфортом, не переймайтеся вартістю доставки!{" "}
        </p>
      </div>
      <div className={styles.backImgThird}>
      <div className={styles.cardS}>
          <p className={styles.textS}>ЗНИЖКИ ДО -15%</p>
        </div>
        <h2 className={styles.titleSBlack}>Знижка на все для намету!</h2>
        <p className={styles.subtitleSBlack}>
        Час вирушити у дику природу! Купуйте товари для кемпінгу та отримайте знижку 15%. Зробіть своє пригодницьке відкриття комфортним та незабутнім.
        </p>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
