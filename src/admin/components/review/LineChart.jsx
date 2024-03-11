import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";

const LineChart = () => {
  const data = {
    labels: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жов', 'Лист', 'Гру'],
    datasets: [
      {
        label: 'Продажі за місяцями',
        data: [250, 260, 300, 260, 320, 300, 200, 200, 90, 150, 110, 110],
        backgroundColor: '#F7F9FB',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 50, 
        },
        title: {
          display: true,
          font: {
            size: 8,
          },
        },
      },
      x: {
        title: {
          display: true,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="w-4/5 h-1/4 bg-darkWhite p-4 rounded-2xl"> 
      <h2>Динаміка продажів</h2>
      <Line data={data} options={options}/>
    </div>
  );
};

export default LineChart;
