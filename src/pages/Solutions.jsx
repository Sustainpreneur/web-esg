import React, { useState, useEffect } from 'react';
import Navbar_made from '../component/Navbar';
import LineChart from '../Charts/LineChart';
import companyAPI from '../apis/companyAPI';
import Price from '../component/Price';
import { useNavigate } from "react-router-dom";

export default function Solutions() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [sectorData, setSectorData] = useState([]);
  const navigate = useNavigate();

  const handleFilter = async (sector) => {
    try {
      setActiveFilter(sector);
      const response = await companyAPI.getStockBySector(sector);
      console.log(response);
      setSectorData(response);
    } catch (error) {
      console.log(error);
    }

  }

  const navigateToDetail = (symbol) => {
    navigate(`/ESG-Profile/${symbol}`);
  };

  useEffect(() => {
    handleFilter('ALL');
  }, []);

  return (
    <div><Navbar_made />
      <div className='container mx-auto px-1 md:px-0'>
        <div className='py-2 text-[40px] leading-10 md:text-5xl font-semibold md:space-y-2'>
          <div>ESG PROFILE</div>
        </div>
        <div className='py-5'>
          {/* <div className='text-lg font-semibold'>Filter</div> */}
          <div className='py-3 grid grid-cols-4 md:flex space-x-1 space-y-1 md:space-x-4 md:space-y-0'>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-red-700 drop-shadow-sm ${activeFilter === 'ALL' ? 'bg-red-700 text-white' : 'bg-white' }`} onClick={() => handleFilter('ALL')}>All Company</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#0d6efd] drop-shadow-sm ${activeFilter === 'TRANS' ? 'bg-[#0d6efd] text-white' : 'bg-white' }`} onClick={() => handleFilter('TRANS')}>Transportation & Logistics</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#198754] drop-shadow-sm ${activeFilter === 'FOOD' ? 'bg-[#198754] text-white' : 'bg-white' }`} onClick={() => handleFilter('FOOD')}>Food and Beverage</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#0dcaf0] drop-shadow-sm ${activeFilter === 'HELTH' ? 'bg-[#0dcaf0] text-white' : 'bg-white' }`} onClick={() => handleFilter('HELTH')}>Health</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#ffc107] drop-shadow-sm ${activeFilter === 'BANK' ? 'bg-[#ffc107] text-white' : 'bg-white' }`} onClick={() => handleFilter('BANK')}>Banking</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#e47831] drop-shadow-sm ${activeFilter === 'TECH' ? 'bg-[#e47831] text-white' : 'bg-white' }`} onClick={() => handleFilter('TECH')}>Information & Communication Technology</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#000000] drop-shadow-sm ${activeFilter === 'ENERG' ? 'bg-[#000000] text-white' : 'bg-white' }`} onClick={() => handleFilter('ENERG')}>Energy & Utilities</button>
          </div>
        </div>
        <div className='md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-6'>
          {sectorData && sectorData.map((dataObj, index) => {
            return (
              <div key={index} className='flex py-1 md:py-0'>
                <div className='border rounded-lg w-full p-4 hover:bg-[#fafafa]'>
                  <div className='flex flex-row'>
                    <div>
                      <div className='text-lg font-bold'>
                        <button type='button' onClick={() => {
                          navigateToDetail(dataObj.symbol);
                        }}>{dataObj.symbol}</button>
                      </div>
                      <div className='text-[#A0A0A0]'>{dataObj.company_name_th}</div>
                      <Price data={dataObj.stock_array} />
                    </div>
                  </div>
                  <div className='pt-4 w-full'>
                    <LineChart data={dataObj.stock_array} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

