import React from 'react'
import { useState } from 'react';

const PriceFilter = () => {
    const [price, setPrice] = useState(0);
  return (
    <div className="flex flex-col items-start gap-2 text-right  bg-[#F7F7F9] rounded-2xl shadow p-4 dark:bg-[#cbcbed]">
    <h2 className="text-base font-bold mb-3">قیمت</h2>
    <div className="w-full flex flex-col gap-1">
      <input
        type="range"
        min={0}
        max={10000000}
        step={100000}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="w-full accent-[#5751E1]"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>از : ۰</span>
        <span>تا : {price.toLocaleString('fa-IR')} تومان</span>
      </div>
    </div>
  </div>

  )
}

export default PriceFilter