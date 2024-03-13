import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";

const BarChart = () => {
  const data = {
    labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    datasets: [
      {
        label: 'Відвідування за днями тижня',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, 
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
    <div className='w-3/6 bg-darkWhite p-4 rounded-2xl'>
      <h2 className='mb-4'>Відвідування профілю</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
