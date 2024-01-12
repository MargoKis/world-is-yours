import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./main.module.css";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider className={styles.slider} {...settings}>
      <div className={styles.textWrap}>
        <div className={styles.cardS}>
          <p className={styles.textS}>знижки до -80%</p>
        </div>
        <h2 className={styles.titleS}>Happy New Year</h2>
        <p className={styles.subtitleS}>
          Здійсни свої бажання разом з Word is Yours
        </p>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
