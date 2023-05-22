import React, { useState, useEffect } from 'react';
import Navbar_made from '../component/Navbar';
import LineChart from '../Charts/LineChart';
import companyAPI from '../apis/companyAPI';
import Price from '../component/Price';
import { useNavigate } from "react-router-dom";

export default function Solutions() {
  const [energyCompany, setEnergyCompany] = useState([]);
  const [bankingCompany, setBankingCompany] = useState([]);
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
        <div className='pt-2 pb-5 text-[40px] leading-10 md:text-5xl font-semibold md:space-y-2'>
          <div>ALL SOLUTION</div>
          <div>FROM ANALYSIS</div>
          <div>IN DATABASE</div>
        </div>
        <div className='text-xl font-bold py-4'>Energy & Utility</div>
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
                    {/* <div className='w-full flex justify-end'>
                      <div className='px-5 py-2 border border-transparent rounded-full text-center'>
                        <div className='font-semibold text-[#03B50A]'>57.7</div>
                        <div className='font-semibold text-xs'>ESG</div>
                      </div>
                    </div> */}
                  </div>
                  <div className='pt-4 w-full'>
                    <LineChart symbol={dataObj.symbol} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className='text-xl font-bold py-4'>Banking</div>
        <div className='md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-6'>
          {bankingCompany && bankingCompany.map((dataObj, index) => {
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
                    {/* <div className='w-full flex justify-end'>
                      <div className='px-5 py-2 border border-transparent rounded-full text-center'>
                        <div className='font-semibold text-[#03B50A]'>57.7</div>
                        <div className='font-semibold text-xs'>ESG</div>
                      </div>
                    </div> */}
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

