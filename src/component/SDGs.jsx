import React, { useState, useEffect } from 'react'

export const SDGs = (item) => {
  const [picItem, setPicItem] = useState([]);

  useEffect(() => {
    if (item) {
      setPicItem(item);
    }
  }, [item]);

  return (
    <div className='flex justify-center md:justify-start px-4 md:px-6 py-2 md:py-4'>
      <div className='grid grid-cols-4 gap-2 md:flex md:space-x-4'>
        {picItem.item && picItem.item.map((dataObj, index) => {
        return (
          <div key={index} className=''>
            <img className='w-[60px] md:w-[50px]' src={`../public/img/SDGs/${dataObj.file}`} alt="" />
          </div>
        )
      })}
      </div>
    </div>
  )
}
