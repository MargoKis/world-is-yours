import React from "react";
import imgMap from "../../assets/png/Map.png";

const WorldMap = () => {
  return (
    <div className="flex flex-col w-3/12 bg-darkWhite p-4 rounded-2xl ml-8">
      <h2 className="mb-4">Трафік за локацією</h2>
      <img src={imgMap} alt="image of world map" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <p>Україна</p>
          <p>38%</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Німеччина</p>
          <p>22%</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Сполучені Штати</p>
          <p>15%</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Португалія</p>
          <p>15%</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>Інші</p>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
