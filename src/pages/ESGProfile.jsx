import React, { useState, useEffect } from 'react'
import Navbar_made from '../component/Navbar';
import LineChartOne from '../Charts/LineChartOne';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { SDGs } from '../component/SDGs';

export default function ESGProfile() {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [esgScore, setEsgScore] = useState([]);
  const [esgScoreEnv, setEsgScoreEnv] = useState([]);
  const [esgScoreSoc, setEsgScoreSoc] = useState([]);
  const [esgScoreGov, setEsgScoreGov] = useState([]);
  const [priceToday, setPriceToday] = useState();
  const [diffPrice, setDiffPrice] = useState();
  const [percentage, setPercentage] = useState([]);
  const [item120Days, setItem120Days] = useState();
  const [itemOptionStock, setItemOptionStock] = useState();
  const [activeMenu, setActiveMenu] = useState(null);

  const getCompanyDataById = async () => {
    try {
      const response = await axios.get(`http://13.213.120.182:8080/esg/companyById?id=${id}`)
      setItem(response.data);
      await getPrice(response.data.symbol);
      await getOptionStock(response.data.symbol);
      await getPrice120DaysAgo(response.data.symbol);
    }
    catch (error) {
      console.log(error);
    }
  }

  const getEsgScoreById = async () => {
    try {
      const response = await axios.get(`http://13.213.120.182:8080/esg-score/sdgByid/${item.symbol}`)
      // console.log(response.data[0].sdg_pic)
      setEsgScore(response.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const getPrice = async (symbol) => {
    try {
      const response = await axios.get(`http://13.213.120.182:8080/financial/stockToday/${symbol}.bk`);
      setPriceToday(response.data[response.data.length - 1].adjClose);
      setDiffPrice((response.data[response.data.length - 1].adjClose - response.data[response.data.length - 2].adjClose).toFixed(2));
      setPercentage((((response.data[response.data.length - 1].adjClose - response.data[response.data.length - 2].adjClose) / response.data[response.data.length - 2].adjClose) * 100).toFixed(2));
    }
    catch (error) {
      console.log(error)
    }
  }

  const getPrice120DaysAgo = async (symbol) => {
    try {
      const response = await axios.get(`http://13.213.120.182:8080/financial/stock120DaysAgo/${symbol}.bk`);
      setItem120Days(response.data);
    }
    catch (error) {
      console.log(error)
    }
  };

  const getOptionStock = async (symbol) => {
    try {
      const response = await axios.get(`http://13.213.120.182:8080/financial/getOptionStock/${symbol}.bk`);
      console.log(response.data);
      setItemOptionStock(response.data);
    }
    catch (error) {
      console.log(error)
    }
  }

  const SplitESG = async () => {
    try {
      esgScore.forEach(score => {
        if (score.Topics_actual === "Environment                                       ") {
          setEsgScoreEnv(prevEnv => [...prevEnv, score]);
        }
        else if (score.Topics_actual === "Social                                            ") {
          setEsgScoreSoc(prevSoc => [...prevSoc, score]);
        }
        else if (score.Topics_actual === "Governance                                        ") {
          setEsgScoreGov(prevGov => [...prevGov, score]);
        }
        else {
          console.log("no");
        }
      });
    }
    catch (error) {
      console.log(error)
    }
  }

  const renderDetails = () => {
    if (activeMenu === null) {
      return <div className='py-2 md:py-8'>
        <div className='text-sm md:text-base pb-4 font-bold'>FINANCIAL INFORMATION</div>
        <div className='border rounded-md px-2 md:px-9 py-3 md:py-6'>
          <div className='flex flex-col md:flex-row md:justify-between'>
            <div className=''>
              <div className='pb-2'>
                <div className='text-sm md:text-lg font-bold'>{item.symbol}</div>
                <div className='text-sm md:text-base font-bold text-[#777777]'>{item.company_name_th}</div>
              </div>
              <div className='pb-2'>
                <div className='text-sm md:text-base font-base'>Market Cap</div>
                <div className='text-sm md:text-base font-bold'>{itemOptionStock && itemOptionStock.marketCap.toLocaleString()}</div>
              </div>
              <div className='pb-2'>
                <div className='text-sm md:text-base font-base'>Avg Vol (3 month)</div>
                <div className='text-sm md:text-base font-bold'>{itemOptionStock && itemOptionStock.averageDailyVolume3Month.toLocaleString()}</div>
              </div>
              <div>
                <div className='text-sm md:text-base font-base'>Trailing P/E</div>
                <div className='text-sm md:text-base font-bold'>{itemOptionStock && itemOptionStock.trailingPE}</div>
              </div>
            </div>
            <div className='pt-3'>
              <div className='flex md:justify-end space-x-1 md:space-x-3'>
                <div className='flex space-x-1 md:space-x-2'>
                  <div className='text-sm md:text-base py-1'>ราคาหุ้น</div>
                  <div className={`${diffPrice >= 0 ? "text-[#03B50A]" : "text-red-700"} text-sm md:text-base py-1 font-bold`}>{priceToday}</div>
                </div>
                <div className={`${diffPrice >= 0 ? "bg-[#03B50A]" : "bg-red-700"} text-sm md:text-base px-2 py-1  rounded-md text-white`}>{diffPrice} ({percentage}%)</div>
              </div>
              <div className='w-full'>
                {item120Days && <LineChartOne item120Days={item120Days} />}
              </div>
            </div>
          </div>
        </div>
      </div>;
    } else if (activeMenu === 'CSR') {
      return <div>CSR details</div>;
    } else if (activeMenu === 'ESG') {
      return <div>
        <div className='text-sm md:text-base pt-6 pb-4 md:pb-4 font-bold'>ESG INFORMATION</div>
        {/* Start Env Score Detail */}
        <div className='mb-8 border rounded-md px-2 md:px-9 py-4 md:py-6'>
          <div className='text-sm md:text-base font-bold'>
            Environment Detail
          </div>
          {esgScoreEnv && esgScoreEnv.map((dataObj, index) => {
            return (
              <div key={index} className='md:py-2'>
                <div className='md:py-4'>
                  <div className='px-4 md:px-6 pt-4 pb-2 md:py-4 text-sm md:text-base font-bold'>Text Source</div>
                  <hr />
                  <div className='px-4 md:px-6 py-2 md:py-4 text-sm md:text-base font-light text-[#333333] text-ellipsis overflow-hidden'>{dataObj.ESG_text}</div>
                  <div className='flex md:space-x-1 px-4 md:px-6 pt-2 md:pt-4'>
                    <div className='w-1/4 md:w-full text-sm md:text-base'>BlackRock Checklist:</div>
                    <div className='w-3/4 md:w-full text-sm md:text-base font-bold'>{dataObj.BlackRock_checklist}</div>
                  </div>
                  <SDGs item={dataObj.sdg_pic} />
                </div>
                <div className='overflow-x-auto mb-4'>
                  <table className='min-w-full'>
                    <thead className='border-b font-medium dark:border-neutral-500'>
                      <tr>
                        <th scope="col" className='text-left px-2 md:px-6 py-4 w-[40%] text-sm md:text-base'>Model Result</th>
                        {/* <th scope="col" className='px-6 py-4'>Weight</th> */}
                        <th scope="col" className='px-2 md:px-6 py-4 w-[60%]'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-2 md:px-6 py-4 text-sm md:text-base'>Actual Textual</td>
                        {/* <td className='text-center whitespace-nowrap px-6 py-4'>15.2%</td> */}
                        <td className='text-center whitespace-nowrap px-6 py-4 text-sm md:text-base'>{dataObj.ESG_labels_actual_textual}</td>
                      </tr>
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-2 md:px-6 py-4 text-sm md:text-base'>Prediction Textual</td>
                        {/* <td className='text-center whitespace-nowrap px-6 py-4'>14.5%</td> */}
                        <td className='text-center whitespace-nowrap px-6 py-4 text-sm md:text-base'>{dataObj.ESG_labels_pred_textual}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* <div>
                    <div className='px-6 py-4 font-bold'>SDGs</div>
                    <hr />
                    <SDGs item={dataObj.sdg_pic} />
                  </div>    */}
              </div>
            )
          })}
        </div>
        {/* End Env Score Detail */}

        {/* Start Social Score Detail */}
        <div className='mb-8 border rounded-md px-2 md:px-9 py-4 md:py-6'>
          <div className='text-sm md:text-base font-bold'>
            Social Detail
          </div>
          {esgScoreSoc && esgScoreSoc.map((dataObj, index) => {
            return (
              <div key={index} className='md:py-2'>
                <div className='md:py-4'>
                  <div className='px-4 md:px-6 pt-4 pb-2 md:py-4 text-sm md:text-base font-bold'>Text Source</div>
                  <hr />
                  <div className='px-4 md:px-6 py-2 md:py-4 text-sm md:text-base font-light text-[#333333]'>{dataObj.ESG_text}</div>
                  <div className='flex md:space-x-1 px-4 md:px-6 md:pt-4'>
                    <div className='w-1/4 md:w-full text-sm md:text-base'>BlackRock Checklist:</div>
                    <div className='w-3/4 md:w-full text-sm md:text-base font-bold'>{dataObj.BlackRock_checklist}</div>
                  </div>
                  <SDGs item={dataObj.sdg_pic} />
                </div>
                <div className='overflow-x-auto mb-4'>
                  <table className='min-w-full'>
                    <thead className='border-b font-medium dark:border-neutral-500'>
                      <tr>
                        <th scope="col" className='text-left px-2 md:px-6 py-4 w-[40%] text-sm md:text-base'>Model Result</th>
                        {/* <th scope="col" className='px-6 py-4'>Weight</th> */}
                        <th scope="col" className='px-2 md:px-6 py-4 w-[60%]'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-2 md:px-6 py-4 text-sm md:text-base'>Actual Textual</td>
                        {/* <td className='text-center whitespace-nowrap px-6 py-4'>15.2%</td> */}
                        <td className='text-center whitespace-nowrap px-6 py-4 text-sm md:text-base'>{dataObj.ESG_labels_actual_textual}</td>
                      </tr>
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-2 md:px-6 py-4 text-sm md:text-base'>Prediction Textual</td>
                        {/* <td className='text-center whitespace-nowrap px-6 py-4'>14.5%</td> */}
                        <td className='text-center whitespace-nowrap px-6 py-4 text-sm md:text-base'>{dataObj.ESG_labels_pred_textual}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>
        {/* End Social Score Detail */}

        {/* Start Governance Score Detail */}
        <div className='mb-8 border rounded-md px-2 md:px-9 py-4 md:py-6'>
          <div className='text-sm md:text-base font-bold'>
            Governance Detail
          </div>
          {esgScoreGov && esgScoreGov.map((dataObj, index) => {
            return (
              <div key={index} className='md:py-2'>
                <div className='md:py-4'>
                  <div className='px-4 md:px-6 pt-4 pb-2 md:py-4 text-sm md:text-base font-bold'>Text Source</div>
                  <hr />
                  <div className='px-4 md:px-6 py-2 md:py-4 text-sm md:text-base font-light text-[#333333]'>{dataObj.ESG_text}</div>
                  <div className='flex md:space-x-1 px-4 md:px-6 pt-2 md:pt-4'>
                    <div className='w-1/4 md:w-full text-sm md:text-base'>BlackRock Checklist:</div>
                    <div className='w-3/4 md:w-full text-sm md:text-base font-bold'>{dataObj.BlackRock_checklist}</div>
                  </div>
                  <SDGs item={dataObj.sdg_pic} />
                </div>
                <div className='overflow-x-auto mb-4'>
                  <table className='min-w-full'>
                    <thead className='border-b font-medium dark:border-neutral-500'>
                      <tr>
                        <th scope="col" className='text-left px-2 md:px-6 py-4 w-[40%] text-sm md:text-base'>Model Result</th>
                        {/* <th scope="col" className='px-6 py-4'>Weight</th> */}
                        <th scope="col" className='px-2 md:px-6 py-4 w-[60%]'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-2 md:px-6 py-4 text-sm md:text-base'>Actual Textual</td>
                        {/* <td className='text-center whitespace-nowrap px-6 py-4'>15.2%</td> */}
                        <td className='text-center whitespace-nowrap px-6 py-4 text-sm md:text-base'>{dataObj.ESG_labels_actual_textual}</td>
                      </tr>
                      <tr className='border-b dark:border-neutral-500'>
                        <td className='whitespace-nowrap px-2 md:px-6 py-4 text-sm md:text-base'>Prediction Textual</td>
                        {/* <td className='text-center whitespace-nowrap px-6 py-4'>14.5%</td> */}
                        <td className='text-center whitespace-nowrap px-6 py-4 text-sm md:text-base'>{dataObj.ESG_labels_pred_textual}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}
        </div>
        {/* End Governance Score Detail */}
      </div>;
    } else if (activeMenu === 'News') {
      return <div>News details</div>;
    }
  };

  useEffect(() => {
    getCompanyDataById();
  }, []);

  useEffect(() => {
    getEsgScoreById();
  }, [item]);

  useEffect(() => {
    if (esgScore) {
      SplitESG();
    }
  }, [esgScore]);

  return (
    <div><Navbar_made />
      {item ? (
        <div className='container mx-auto px-1 md:px-0'>
          <div className='pt-6 pb-3 text-lg md:text-2xl font-bold'>
            <div>{item.company_name_en}</div>
            <div>{item.company_name_th}</div>
          </div>
          <div className='flex space-x-2'>
            <div className='bg-[#DE0000] text-white px-3 text-sm md:text-base rounded-md'>Sector: {item.industry_group}</div>
            <div className='bg-[#DE0000] text-white px-3 text-sm md:text-base rounded-md'>Industry Group: {item.industry_group}</div>
          </div>
          <div className='mt-2 flex space-x-2'>
            <div className='bg-[#a2a2a2] text-white px-3 text-sm md:text-base rounded-md'>SET THSI</div>
            <div className='bg-[#a2a2a2] text-white px-3 text-sm md:text-base rounded-md'>SET THSI INDEX</div>
            <div className='bg-[#a2a2a2] text-white px-3 text-sm md:text-base rounded-md'>SET 50</div>
            <div className='bg-[#a2a2a2] text-white px-3 text-sm md:text-base rounded-md'>SET 100</div>
          </div>
          <div className='pt-4 md:pt-6'>
            <div className='pb-2 text-sm md:text-base font-bold'>COMPANY DESCRIPTION</div>
            <div className='px-1 md:pl-2 text-sm md:text-base font-light'>
              บริษัท แอดวานซ์ อินโฟร์ เซอร์วิส จำกัด (มหาชน) (อังกฤษ: Advanced Info Service Public Company Limited) หรือเรียกโดยย่อว่า
              เอไอเอส (อังกฤษ: AIS) เป็นบริษัทมหาชนด้านเทคโนโลยีสารสนเทศและการสื่อสารของไทย เป็นผู้ให้บริการเครือข่ายโทรศัพท์มือถือที่ใหญ่ที่สุดของประเทศตามจำนวนผู้ใช้งาน[4] มีสถานะเป็นบริษัทในเครือของอินทัช โฮลดิ้งส์ โดยใน ปี พ.ศ. 2563 เอไอเอสถือเป็นบริษัทที่มีมูลค่าหลักทรัพย์ตามราคาตลาดสูงเป็นอันดับสี่ในตลาดหลักทรัพย์แห่งประเทศไทย
            </div>
          </div>
          <div className='flex'>
            <div className='mt-4 space-y-2 w-[50%]'>
              <div className='flex space-x-1'>
                <div className='font-bold'>Market:</div>
                <div>SET</div>
              </div>
              <div className='flex space-x-1'>
                <div className='font-bold'>CG SCORE:</div>
                <div>5 star</div>
              </div>
              <div className='flex space-x-1'>
                <div className='font-bold'>AGM LEVEL:</div>
                <div>5</div>
              </div>
              <div className='flex space-x-1'>
                <div className='font-bold'>THAI CAC:</div>
                <div>ได้รับการรับรอง</div>
              </div>
            </div>
            <div className='mt-4 space-y-2 w-[50%]'>
              <div className='flex space-x-1'>
                <div className='font-bold'>Address:</div>
                <div>SET</div>
              </div>
              <div className='flex space-x-1'>
                <div className='font-bold'>Telephone:</div>
                <div>0-2537-2000</div>
              </div>
              <div className='flex space-x-1'>
                <div className='font-bold'>Fax</div>
                <div>0-2665-2705</div>
              </div>
              <div className='flex space-x-1'>
                <div className='font-bold'>Website:</div>
                <div className='text-[#033fb5] font-bold'>http://www.pttplc.com</div>
              </div>
            </div>
          </div>
          <div className='py-5'>
            <hr />
          </div>

          <div className='flex border-b'>
            <button className={`px-3 py-2 rounded-t-lg border border-red-600 w-[100px] font-bold text-center ${activeMenu === null ? 'bg-red-600 text-white' : 'text-red-600'}`} onClick={() => setActiveMenu(null)}>Financial</button>
            <button className={`px-3 py-2 rounded-t-lg border border-yellow-600 w-[100px] font-bold text-center ${activeMenu === 'CSR' ? 'bg-yellow-600 text-white' : 'text-yellow-600'}`} onClick={() => setActiveMenu('CSR')}>CSR</button>
            <button className={`px-3 py-2 rounded-t-lg border border-green-600 w-[100px] font-bold text-center ${activeMenu === 'ESG' ? 'bg-green-600 text-white' : 'text-green-600'}`} onClick={() => setActiveMenu('ESG')}>ESG</button>
            <button className={`px-3 py-2 rounded-t-lg border border-sky-600 w-[100px] font-bold text-center ${activeMenu === 'News' ? 'bg-sky-600 text-white' : 'text-sky-600'}`} onClick={() => setActiveMenu('News')}>News</button>
          </div>
          <div>{renderDetails()}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}


    </div>
  )
}