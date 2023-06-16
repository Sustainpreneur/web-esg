import React from 'react'
import Navbar_made from '../component/Navbar';

export default function AboutUs() {
  return (
    <>
      <Navbar_made />
      <div className='container mx-auto px-1 md:px-0 z-10'>
        <div className='pt-2 pb-5 lg:pb-10'>
          <h1 className='text-[40px] leading-10 lg:text-8xl font-bold text-[#EA9A00]'>SUSTAINPRENEUR</h1>
          <h1 className="text-[40px] leading-10 lg:text-8xl font-bold">ESG DATA<br /> ANALYSIS<br /> PLATFORM</h1>
        </div>
        <div className='mt-10'>
          <p className='text-base lg:text-2xl font-bold'>
            CSR and SDGs
          </p>
          <div className='my-4 flex justify-center'>
            <img className='w-[60%]' src="img/csr&sdgs.png" alt="" />
          </div>
          <p className='font-light indent-8'>Corporate Social Responsibility (CSR) and the Sustainable Development Goals (SDGs) are closely linked and complementary concepts. CSR refers to a company's commitment to operating in a socially and environmentally responsible manner, while the SDGs are a set of 17 global goals established by the United Nations to address pressing social, economic, and environmental challenges.</p>
          <p className='mt-2 font-light indent-8'>CSR provides a framework for companies to align their operations and initiatives with the SDGs, demonstrating their commitment to sustainable development. By integrating CSR practices into their business strategies, companies can play a significant role in contributing to the achievement of the SDGs and creating a more inclusive and sustainable world. </p>
        </div>
        <div className='mt-20'>
          <p className='text-base lg:text-2xl font-bold'>
            ESG: Environmental, Social, and Governance
          </p>
          <div className='my-4 flex justify-center'>
            <img className='w-[30%]' src="img/ESG_Ecosystem-removebg.png" alt="" />
          </div>
          <div className='text-sm font-light text-center'>ESG Ecosystem Map from World Economic Forum</div>
          <div className='mt-10 font-light'>
            <div className='indent-8'>
              ESG corporate sustainability covers three aspects: "E-Environment," "S-Social," and "G-Governance." ESG refers to actions a company takes to fulfill these social responsibilities. While CSR goals is a broad concept, ESG focuses on the specific actions that can implemented to realize these goals.
            </div>
            <div className='my-2 pl-8'>
              <ul className='list-disc space-y-1'>
                <li>
                  <div className='flex space-x-1'>
                    <div><span className='text-[#03B50A]'>Environmental </span>factors refer to how a company manages its impact on the environment, such as its carbon footprint, resource usage, waste management, and commitment to renewable energy.</div>
                  </div>
                </li>
                <li>
                  <div className='flex space-x-1'>
                    <div><span className='text-[#EA9A00]'>Social </span>factors involve a company's impact on society and stakeholders, including its labor practices, employee welfare, community engagement, diversity and inclusion, and product safety.</div>
                  </div>
                </li>
                <li>
                  <div className='flex space-x-1'>
                    <div><span className='text-[#033FB5]'>Governance </span>
                      factors pertain to a company's corporate governance structure, transparency, accountability, and ethical standards. This includes aspects such as board composition, executive compensation, shareholder rights, and anti-corruption measures.</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className='indent-8'>
              ESG has gained significant importance in the business world as investors, customers, and other stakeholders increasingly value sustainable and responsible business practices. Companies with strong.
            </div>
            <div className='indent-8'>
              ESG performance are seen as more attractive to investors and are often associated with long-term financial stability and positive social and environment.
            </div>
          </div>
        </div>
        <div className='my-20 flex'>
          <div className='w-[30%]'>
            <img src="img/esg_impact.png" alt="" />
          </div>
          <div className='ml-10'>
            <div className='font-bold text-base lg:text-2xl'>IMPACT OF ESG ON THE FUTURE</div>
            <div className='py-2 font-light space-y-2'>
              <div><span className='text-[#EA9A00]'>Sustainable Business Practices: </span>ESG encourages companies to adoaxpt sustainable business practices that minimize environmental impact, promote social responsibility, and prioritize good governance.</div>
              <div><span className='text-[#EA9A00]'>Long-Term Value Creation: </span>ESG considerations enable companies to focus on long-term value creation rather than short-term gains. By addressing ESG issues, companies can improve operational efficiency, innovate, build trust, and foster sustainable growth.</div>
              <div><span className='text-[#EA9A00]'>Risk Management: </span>ESG factors play a crucial role in identifying and managing risks. Companies that assess and mitigate environmental and social risks, such as climate change, supply chain disruptions, and reputational damage, are better positioned to navigate uncertainties and future challenges.</div>
            </div>
          </div>
        </div>
        <div className='py-5 md:py-10'>
          <h1 className='text-base md:text-2xl font-bold'>HOW TO USE PLATFORM?</h1>
          <div className='pt-4'>
            <div className='flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 order-1'>
                <p className='font-light'>1. Home page provides a brief financial and non-financial data each  company, Showing sustainable news and sustainable index.</p>
              </div>
              <div className='md:w-1/2 order-2'>
                <img className='md:w-[80%]' src="img/home_page.png" alt="" />
              </div>
            </div>
            <div className='py-4'>
              <hr />
            </div>
            <div className='md:pt-6 flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 order-2'>
                <img className='md:w-[80%]' src="img/insight_page.png" alt="" />
              </div>
              <div className='md:w-1/2 order-1'>
                <p className='font-light'>2. Select the company you are interested in. by clicking on the company abbreviation to view the company's detailed information.</p>
              </div>
            </div>
            <div className='py-4'>
              <hr />
            </div>
            <div className='md:pt-6 flex flex-col md:flex-row items-center'>
              <div className='md:w-1/2 order-1'>
                <p className='font-light'>3. ESG Profile Page This page provides detailed information about a company's ESG.</p>
                <p className='mt-2 font-light'>It is divided into 4 main parts: The company's preliminary information consists of Company abbreviation Company full name, Financial data such as stock graphs current stock price, stock price percentage today compared to yesterday, CSR the activity of responsibility for develop the business with SDGs. As for the annual report data, analyze and compare the results between AI and human beings to see if the results are the same or not. The Company news for tracking company news is essential for staying updated on current operations.</p>
              </div>
              <div className='md:w-1/2 order-2'>
                <img className='md:w-[80%]' src="img/ESG_Profile_page.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

