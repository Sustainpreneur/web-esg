import React, { useState, useEffect } from 'react';
import Navbar_made from '../component/Navbar';
import LineChart from '../Charts/LineChart';
import companyAPI from '../apis/companyAPI';
import Price from '../component/Price';
import { useNavigate } from "react-router-dom";

export default function Solutions() {
  const [energyCompany, setEnergyCompany] = useState([]);
  const [bankingCompany, setBankingCompany] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  const navigate = useNavigate();

  const getEnergyCompany = async () => {
    try {
      const response = await companyAPI.getEnergyCompany()
      setEnergyCompany(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  const getBankingCompany = async () => {
    try {
      const response = await companyAPI.getBankingCompany()
      setBankingCompany(response);
    }
    catch (error) {
      console.log(error);
    }
  }
  

  const navigateToDetail = (id) => {
    navigate(`/ESG-Profile/${id}`);
  };

  useEffect(() => {
    getEnergyCompany();
    getBankingCompany();
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
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-red-700 drop-shadow-sm ${activeFilter === null ? 'bg-red-700 text-white' : 'bg-white' }`} onClick={() => setActiveFilter(null)}>All Company</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#0d6efd] drop-shadow-sm ${activeFilter === ' Transportation & Logistics' ? 'bg-[#0d6efd] text-white' : 'bg-white' }`} onClick={() => setActiveFilter(' Transportation & Logistics')}>Transportation & Logistics</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#198754] drop-shadow-sm ${activeFilter === 'Food and Beverage' ? 'bg-[#198754] text-white' : 'bg-white' }`} onClick={() => setActiveFilter('Food and Beverage')}>Food and Beverage</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#0dcaf0] drop-shadow-sm ${activeFilter === 'Commerce' ? 'bg-[#0dcaf0] text-white' : 'bg-white' }`} onClick={() => setActiveFilter('Commerce')}>Commerce</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#ffc107] drop-shadow-sm ${activeFilter === 'Banking' ? 'bg-[#ffc107] text-white' : 'bg-white' }`} onClick={() => setActiveFilter('Banking')}>Banking</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#e47831] drop-shadow-sm ${activeFilter === 'Information & Communication Technology' ? 'bg-[#e47831] text-white' : 'bg-white' }`} onClick={() => setActiveFilter('Information & Communication Technology')}>Information & Communication Technology</button>
            <button className={`text-[12px] md:text-sm font-semibold md:px-5 md:py-2 rounded-lg border border-[#000000] drop-shadow-sm ${activeFilter === 'Energy & Utilities' ? 'bg-[#000000] text-white' : 'bg-white' }`} onClick={() => setActiveFilter('Energy & Utilities')}>Energy & Utilities</button>
          </div>
        </div>
        <div className='md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-6'>
          {energyCompany && energyCompany.map((dataObj, index) => {
            return (
              <div key={index} className='flex py-1 md:py-0'>
                <div className='border rounded-lg w-full p-4 hover:bg-[#fafafa]'>
                  <div className='flex flex-row'>
                    <div>
                      <div className='text-lg font-bold'>
                        <button type='button' onClick={() => {
                          navigateToDetail(dataObj.id);
                        }}>{dataObj.symbol}</button>
                      </div>
                      <div className='text-[#A0A0A0]'>{dataObj.company_name_th}</div>
                      <Price symbol={dataObj.symbol} />
                    </div>
                  </div>
                  <div className='pt-4 w-full'>
                    <LineChart symbol={dataObj.symbol} />
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

