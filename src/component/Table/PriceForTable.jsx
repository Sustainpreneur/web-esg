import { React, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const PriceForTable = (symbol) => {
  const [priceToday, setPriceToday] = useState([]);
  const [diffPrice, setDiffPrice] = useState([]);
  const [percentage, setPercentage] = useState([]);

  const getPrice = async () => {
    try {
      const response = await axios.get(`/financial/stockToday/${symbol.symbol}.bk`)
      setPriceToday(response.data[response.data.length - 1]);
      setDiffPrice((response.data[response.data.length - 1].adjClose - response.data[response.data.length - 2].adjClose).toFixed(2));
      setPercentage((((response.data[response.data.length - 1].adjClose - response.data[response.data.length - 2].adjClose) / response.data[response.data.length - 2].adjClose) * 100).toFixed(2));
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getPrice();
  }, [symbol])

  return (
    <>
      <th scope='row' className='px-6 py-4 font-light text-gray-900 whitespace-nowrap'>
        <div className={`${diffPrice >= 0 ? "text-[#03B50A]" : "text-red-700"} font-bold`}>{priceToday.adjClose}</div>
      </th>
      <th scope='row' className='px-6 py-4 whitespace-nowrap'>
        <div className={`${diffPrice >= 0 ? "bg-[#03B50A]" : "bg-red-700"} flex justify-center p-1 text-xs text-white rounded-md space-x-1 w-[100px]`}>
          <div>{`${diffPrice >= 0 ? "+" : ""}`}{diffPrice}</div>
          <div>({percentage}%)</div>
        </div>
      </th>


    </>
  )
}

export default PriceForTable;