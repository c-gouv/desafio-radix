import React, { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Title } from 'chart.js';

Chart.register(LinearScale, CategoryScale, BarElement, Title);

const AvgGraph = ({ timeRange }) => {
  const [chartData, setChartData] = useState({});

  const fetchData = async (range) => {
    try {
      const response = await fetch(`http://localhost:8080/graphData/data/${range}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const formattedData = {
        labels: data.labels,
        datasets: [
          {
            label: `Data for the ${range}`,
            backgroundColor: 'rgb(91, 51, 111,0.7)',
            borderColor: '#5b336f',
            borderWidth: 1,
            data: data.values,
          },
        ],
      };

      setChartData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (timeRange) {
      fetchData(timeRange);
    }
  }, [timeRange]);

  const optionsChart = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {chartData.labels ? (
        <Bar data={chartData} options={optionsChart} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AvgGraph;