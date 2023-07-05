import { React, useState, useEffect, useCallback } from 'react';

const Price = (stock_array) => {
  const [priceToday, setPriceToday] = useState([]);
  const [diffPrice, setDiffPrice] = useState([]);
  const [percentage, setPercentage] = useState([]);
  // console.log(stock_array);

  const getPrice = async (stock_array) => {
    try {
      console.log(stock_array.data[stock_array.data.length - 1].adjclose)
      setPriceToday(stock_array.data[stock_array.data.length - 1]);
      setDiffPrice((stock_array.data[stock_array.data.length - 1].adjClose - stock_array.data[stock_array.data.length - 2].adjClose).toFixed(2));
      setPercentage((((stock_array.data[stock_array.data.length - 1].adjClose - stock_array.data[stock_array.data.length - 2].adjClose)/stock_array.data[stock_array.data.length - 2].adjClose)*100).toFixed(2));
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getPrice(stock_array);
  }, [stock_array])

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