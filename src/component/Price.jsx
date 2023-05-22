import { React, useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import axios from 'axios';

const Price = (symbol) => {
  const [priceToday, setPriceToday] = useState([]);
  const [diffPrice, setDiffPrice] = useState([]);
  const [percentage, setPercentage] = useState([]);

  const getPrice = async () => {
    try {
      const response = await axios.get(`http://13.229.61.239:8080/financial/stockToday/${symbol.symbol}.bk`)
      setPriceToday(response.data[response.data.length - 1]);
      setDiffPrice((response.data[response.data.length - 1].adjClose - response.data[response.data.length - 2].adjClose).toFixed(2));
      setPercentage((((response.data[response.data.length - 1].adjClose - response.data[response.data.length - 2].adjClose)/response.data[response.data.length - 2].adjClose)*100).toFixed(2));
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getPrice();
  }, [])

  return (
    <div className='flex space-x-2'>
      <div className='text-[#A0A0A0]'>price</div>
      <div className={`${diffPrice >= 0 ? "text-[#03B50A]":"text-red-700"} font-bold`}>{priceToday.adjClose}</div>
      <div className={`${diffPrice >= 0 ? "bg-[#03B50A]" : "bg-red-700"} flex p-1 text-xs text-white rounded-md space-x-1`}>
        <div>{`${diffPrice >= 0 ? "+" : ""}`}{diffPrice}</div>
        <div>({percentage}%)</div>
      </div>
    </div>
  )
}

export default Price