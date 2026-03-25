import React from 'react';

const PopularDeals = () => {
  const deals = [
    { title: "FCGROUP SAVER", discount: "Up To 30% Off", description:"You choose a flight,we take 30% off price", coupon: "FCGROUP", img: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=500" },
    { title: "FCBUSINESS SAVER", discount: "Up To 25% Off", description:"You choose a flight,we take 30% off price", coupon: "FCBUSINESS", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=500" },
    { title: "FCFAMILY SAVER", discount: "Up To 20% Off", description:"You choose a flight,we take 30% off price", coupon: "FCFAMILY", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=500" },
  ];

  return (
    <section className="md:py-16 py-5 bg-white">
      <div className="container mx-auto px-4 max-w-7xl ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Popular Deals</h2>
        <div className="flex md:grid md:grid-cols-3  gap-10 overflow-x-auto md:overflow-visible pb-2 ">
          {deals.map((deal, index) => (
            <div key={index} className="flex min-w-[90%] md:min-w-full md:mx-auto items-center bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all group ">
              <img src={deal.img} alt={deal.title} className="w-24 h-28 rounded-xl object-cover" />
              <div className="ml-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{deal.title}</p>
                <h3 className="text-xl font-black text-black leading-tight">{deal.discount}</h3>
                <h3 className="text-md text-black/70  ">{deal.description}</h3>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className='text-md text-black/70 '>Coupon: <span className='text-black text-sm font-bold'>{deal.coupon}</span></p>
                  <button className="text-xs rounded w-20 h-5 text-white bg-blue-800 hover:underline italic">Call Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDeals;