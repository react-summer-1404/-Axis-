import React from 'react';

const SectionHeader = () => {
  return (
    <div className="flex justify-between items-center mb-4 mt-6 border-b border-gray-200 pb-2">
      <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
        مشاهده همه &rarr;
      </a>
      <h2 className="text-xl font-bold text-gray-800">دوره‌های در حال برگزاری</h2>
      <h2 className="text-xl font-bold text-gray-800"> دوره های پیشنهادی</h2>
    </div>
  );
};

export default SectionHeader;