import React from 'react';

const Statistics = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-[#282568]-50">
      <div className="bg-blue-700 text-white rounded-2xl shadow-md py-8 px-10 flex flex-wrap justify-center items-center gap-10 text-center mb-10 w-full max-w-5xl">
        <div>
          <h2 className="text-4xl font-bold mb-1">45K+</h2>
          <p className="text-sm opacity-90">مشتری ها</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-1">89+</h2>
          <p className="text-sm opacity-90">کشورها</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-1">156K+</h2>
          <p className="text-sm opacity-90">پروژه ها</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-1">42K</h2>
          <p className="text-sm opacity-90">تیم ها</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
