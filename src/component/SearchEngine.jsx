import React, { useState } from 'react';
import PassengerPicker from './PassengerPicker';
import { useNavigate } from 'react-router-dom';

const SearchEngine = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('round-trip');

  const cities = [
    { name: "New Delhi", code: "DEL", country: "India" },
    { name: "Mumbai", code: "BOM", country: "India" },
    { name: "New York", code: "JFK", country: "USA" },
    { name: "London", code: "LHR", country: "UK" },
    { name: "Dubai", code: "DXB", country: "UAE" },
  ];
  
  const [fromQuery, setFromQuery] = useState('');
  const [toQuery, setToQuery] = useState('');
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  const filteredFrom = cities.filter(c => 
    c.name.toLowerCase().includes(fromQuery.toLowerCase()) || 
    c.code.toLowerCase().includes(fromQuery.toLowerCase())
  );

  const filteredTo = cities.filter(c => 
    c.name.toLowerCase().includes(toQuery.toLowerCase()) || 
    c.code.toLowerCase().includes(toQuery.toLowerCase())
  );

  // SEARCH CLICK HANDLER
  const handleSearch = (e) => {
    e.preventDefault();
    if(!fromQuery || !toQuery) {
        alert("Please select cities!");
        return;
    }
    navigate('/search-results');
  };

  return (
    <section className="relative min-h-[430px] flex items-center justify-center py-12 px-4 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://www.flightschannel.com/images/ho_se_banner.webp')" }}>
      
      <div className="absolute inset-0 bg-black/30">
      <div className='flex flex-col max-w-7xl mx-30 pt-12 '>
        <h1 className="text-4xl font-bold text-white pb-2">Explore the Skies</h1>
        <p className='text-white'>Your Ultimate Flight Booking Search Engine for Seamless Travel Experiences!</p>
      </div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl bg- backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8 bg-black/50 backdrop-blur-md">
        

        {/* Trip Type Tabs */}
        <div className="flex space-x-6 mb-4 ">
          {['one-way', 'round-trip', 'multi-city'].map((type) => (
            <button key={type} onClick={() => setTripType(type)}
              className={`border bg-transparent   p-1 m-2 pb-2 px-1 capitalize transition-all ${tripType === type ? ' text-blue-800  font-semibold bg-white' : 'text-white/90'} md:px-4 md:rounded-2xl rounded-lg  text-sm px-3 cursor-pointer`}>
              {type.replace('-', ' ')}
            </button>
          ))}
        </div>

        {tripType !== 'multi-city' ? (
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            
            {/* FROM */}
            <div className="relative flex flex-col space-y-2">
              {/* <label className="text-sm font-semibold text-gray-700">From</label> */}
              <input 
                type="text" 
                value={fromQuery}
                onChange={(e) => {setFromQuery(e.target.value); setShowFromList(true)}}
                onFocus={() => setShowFromList(true)}
                placeholder="Where From" 
                className="p-3 border rounded-lg focus:ring-2 bg-white text-black focus:ring-blue-500 outline-none w-full" 
              />
              {showFromList && fromQuery && (
                <ul className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg mt-1 z-[100] max-h-48 overflow-y-auto">
                  {filteredFrom.map(city => (
                    <li key={city.code} 
                        onClick={() => {setFromQuery(`${city.name} (${city.code})`); setShowFromList(false)}}
                        className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0 flex justify-between">
                      <span className="text-sm">{city.name}</span>
                      <span className="font-bold text-blue-600 text-sm">{city.code}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* TO */}
            <div className="relative flex flex-col space-y-2">
              {/* <label className="text-sm font-semibold text-gray-700">To</label> */}
              <input 
                type="text" 
                value={toQuery}
                onChange={(e) => {setToQuery(e.target.value); setShowToList(true)}}
                onFocus={() => setShowToList(true)}
                placeholder="Where To" 
                className="p-3 border bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 outline-none w-full" 
              />
              {showToList && toQuery && (
                <ul className="absolute top-full left-0 w-full bg-white border shadow-xl rounded-lg mt-1 z-[100] max-h-48 overflow-y-auto">
                  {filteredTo.map(city => (
                    <li key={city.code} 
                        onClick={() => {setToQuery(`${city.name} (${city.code})`); setShowToList(false)}}
                        className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-0 flex justify-between">
                      <span className="text-sm">{city.name}</span>
                      <span className="font-bold text-blue-600 text-sm">{city.code}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              {/* <label className="text-sm font-semibold text-gray-700">Date</label> */}
              <input type="date" required className="p-3 border rounded-lg outline-none w-full bg-white" />
            </div>

            <div className="flex flex-col space-y-2">
              <PassengerPicker />
            </div>

            <button type="submit" className="bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition shadow-lg transform active:scale-95">
              SEARCH 🔍
            </button>
          </form>
        ) : (
          <div className="p-10 text-center border-2 border-dashed rounded-lg bg-gray-50 text-gray-500 font-medium">
             ✈️ Multi-City booking is currently under maintenance.
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchEngine;