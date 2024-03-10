import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data = {
    labels: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жов', 'Лист', 'Гру'],
    datasets: [
      {
        data: [250, 260, 300, 260, 320, 300, 200, 200, 90, 150, 110, 110],
        backgroundColor: '#F7F9FB',
      },
    ],
  };

  return (
    <div className="w-3/5 h-1/5"> 
      <h2>Динаміка продажів</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
