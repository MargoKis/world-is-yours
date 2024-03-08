import React from "react";
import Button from "../common/Button";
import styles from "../registration-popup/signup.module.css";
import ColorPicker from "./ColorPicker";
import ClothingSizePicker from "./ClothingSizePicker";
import ShoeSizePicker from "./ShoeSizePicker";
import AccordionText from "./AccordionText";

const FilterList = () => {
  return (
    <div className="flex flex-col w-96 gap-5">
      <div className="flex flex-col w-96 gap-2">
        <h1 className="font-raleway font-semibold text-2xl text-left text-grayDark">
          {" "}
          Трекінгове взуття Salomon
        </h1>
        <p className="font-raleway font-semibold text-xl text-left text-grayDark">
          {" "}
          5400 грн{" "}
        </p>
        <p className="font-raleway font-light text-l text-left text-grayDark">
          {" "}
          Оптимальний комфорт і відмінна підтримка навіть на найвимогливіших
          маршрутах.
        </p>
      </div>
      <div className="">
        <p>Колір</p>
        <div class="flex flex-row">
          <ColorPicker />
        </div>
      </div>
      <hr className="text-gray border-1" />

      <div>
        <p>Розмір</p>
        {/* <ClothingSizePicker /> */}
        <ShoeSizePicker />
      </div>
      <Button classNameBtn={styles.productBtn}>Додати до корзини</Button>

      <AccordionText />
    </div>
  );
};

export default FilterList;
