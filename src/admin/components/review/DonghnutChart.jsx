import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS} from "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        data: [50, 35, 15],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-2/5 h-72 bg-darkWhite p-4 rounded-2xl"> 
      <h2>Користувачі за пристроями</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
