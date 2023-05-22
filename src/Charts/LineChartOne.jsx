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


const LineChartOne = (item120Days) => {
  // const items120Days = [];
  const [stockData, setStockData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log(item120Days);
    
  let labels = [];

  for(let i=0; i<250; i++){
      labels.push("");
  }

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: item120Days.item120Days.map((item) => item.adjClose),
        borderColor: '#0E9CFF',
        cubicInterpolationMode: 'monotone',
        backgroundColor: '#0E9CFF',
        pointRadius: 0,
      },
    ],
  };

  useEffect(() => {
    if(item120Days) {
      setIsLoading(false);
    }
  }, [item120Days])

  // useEffect(() => {
  //   if (item120Days) {
  //     setStockData(item120Days);
  //   }
  // }, [item120Days])


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

export default LineChartOne;