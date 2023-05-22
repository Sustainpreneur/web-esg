import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { debounce } from 'lodash';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
};


const LineChart = (symbol) => {
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(symbol);

  const getFinance = async () => {
    try {
        const response = await axios.get(`http://54.169.193.60:4000/financial/stock120DaysAgo/${symbol.symbol}.bk`);
        console.log(response.data);
        setStockData(response.data);
        setIsLoading(false);
    }
    catch (error) {
      console.log(error)
    }
  };
    
  let labels = [];

  for(let i=0; i<250; i++){
      labels.push("");
  }

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: stockData.map((item) => item.adjClose),
        borderColor: '#0E9CFF',
        cubicInterpolationMode: 'monotone',
        backgroundColor: '#0E9CFF',
        pointRadius: 0,
      },
    ],
  };

  useEffect(() => {
    if (symbol) {
      getFinance();
    }
  }, [symbol])


  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Line options={options} data={data} />
      )
      }
    </div>
  )
}

export default LineChart;