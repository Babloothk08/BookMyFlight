import React from 'react';

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4  md:max-w-7xl -mb-20 relative z-10">
      <div className="bg-white border-8 border-blue-700 rounded-[2.5rem] p-8 md:p-2 shadow-xl">
        <div className="flex flex-col md:flex-col items-center justify-between py-2 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-semibold text-gray-800 ">
              Subscribe to Get Notified About Latest Deals & Offers
            </h2>
          </div>
          <div className=" flex flex-col md:flex-row bg-black/10 md:min-w-3xl gap-5 md:gap-10 md:px-10 py-5 rounded-2xl md:rounded-4xl items-center md:p-5 md:justify-between p-2">
            <div className="flex flex-row justify-start gap-5 border-b-1  w-full">
              <span className="">📩</span>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="text-xl "
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-22 md:px-15 py-2 rounded-4xl shadow-lg shadow-red-200 transition-all active:scale-95 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;