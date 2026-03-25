import React from 'react';
import { Phone, Plane, Building2, Car, Binoculars, ChevronDown } from 'lucide-react';

// --- 1. Sub-Component: Package Card ---
// Isse main component ke bahar rakha hai taaki code clean rahe
const PackageCard = ({ image, title, days, price }) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group">
    <div className="relative h-52 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-[#1a2b48] font-bold text-lg leading-tight mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-5">{days}</p>
      <div className="flex justify-between items-end mb-6">
        <div className="flex gap-3 text-gray-400 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
          <Plane size={18} /> <Building2 size={18} /> <Car size={18} /> <Binoculars size={18} />
        </div>
        <div className="text-right">
          <p className="text-[#20ab7d] font-extrabold text-2xl leading-none">${price}.00</p>
          <p className="text-gray-400 text-[10px] mt-1 uppercase">Starting From</p>
        </div>
      </div>
      <div className="flex gap-3 mt-auto">
        <button className="p-3 border-2 border-[#1F3F63] rounded-xl text-[#1F3F63] hover:bg-[#1F3F63] hover:text-white transition-all">
          <Phone size={20} />
        </button>
        <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-3 rounded-xl hover:from-blue-700 transition shadow-lg shadow-blue-200">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

// --- 2. Main Component ---
function Packages() {
  const worldwideData = [
    { title: "European Highlights Tour", days: "10-14 Days", price: "3499", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600" },
    { title: "Tropical Paradise: Maldives", days: "7-10 Days", price: "1799", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600" },
    { title: "Australia Adventure", days: "6D/5N", price: "2099", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=600" }
  ];

  const honeymoonData = [
    { title: "Greece - Romantic Getaway", days: "7D/6N", price: "3499", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600" },
    { title: "Italy - Honeymoon Special", days: "8D/7N", price: "1799", image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600" },
    { title: "Paris - Majestic Nights", days: "6D/5N", price: "2099", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600" }
  ];

  const countries = [
    { name: "Italy", img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400" },
    { name: "France", img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=400" },
    { name: "Thailand", img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=400" },
    { name: "Greece", img: "https://images.unsplash.com/photo-1503152397458-71280d566f07?auto=format&fit=crop&w=400" },
  ];

  return (
    <div className="font-sans text-[#1a2b48] bg-gray-50">
      {/* BANNER */}
      <div className='min-h-[450px] flex flex-col items-center justify-center py-12 px-4 bg-cover bg-center relative' style={{ backgroundImage: "url('https://www.flightschannel.com/images/ho_se_banner.webp')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-md uppercase">Discover The World</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Explore our handpicked travel packages designed for every adventurer.</p>
        </div>
      </div>

      {/* WORLDWIDE PACKAGES */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b48]">Worldwide Packages</h2>
          <div className="h-1.5 w-20 bg-blue-600 mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {worldwideData.map((pkg, index) => <PackageCard key={index} {...pkg} />)}
        </div>
        <div className="flex justify-center">
          <button className="group flex items-center gap-2 bg-white border border-gray-200 px-8 py-3 rounded-full font-bold shadow-sm hover:shadow-md text-blue-600 transition-all">
            View More Packages <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </section>

      {/* HONEYMOON PACKAGES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1a2b48]">Honeymoon Packages</h2>
          <div className="h-1.5 w-20 bg-pink-500 mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {honeymoonData.map((pkg, index) => <PackageCard key={index} {...pkg} />)}
        </div>
      </section>

      {/* COUNTRIES WE SERVE */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Countries we serve in</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {countries.map((country, i) => (
            <div key={i} className="relative h-48 rounded-xl overflow-hidden group cursor-pointer shadow-lg">
              <img src={country.img} alt={country.name} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-all">
                <span className="text-white text-2xl font-black uppercase tracking-widest">{country.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMIZE FORM */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="bg-[#1f2937] p-8 md:p-12 rounded-2xl shadow-2xl text-white">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Want to Customize your Own Package?</h2>
            <p className="text-gray-400 mt-2">Talk to our experts</p>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <input type="text" placeholder="Your Name" className="bg-white text-gray-800 p-3 rounded-lg outline-none" />
            <input type="email" placeholder="Email" className="bg-white text-gray-800 p-3 rounded-lg outline-none" />
            <input type="text" placeholder="Contact" className="bg-white text-gray-800 p-3 rounded-lg outline-none" />
            <button type="submit" className="bg-[#ff5a5f] hover:bg-[#ff444a] text-white font-bold py-3 rounded-lg transition-all active:scale-95">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Packages;