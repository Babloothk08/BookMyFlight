import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
      window.scroll(0, 0);
    });

  return (
    <section className="relative min-h-[470px] flex items-center justify-center py-12 px-4 bg-cover bg-center" 
             style={{ backgroundImage: "url('/images/banner (book myflight).jpg.jpeg')" }}>
      
      <div className="absolute inset-0 bg-black/30">
      <div className='flex flex-col max-w-7xl mx-30 pt-17 '>
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









// import React, { useEffect, useState } from 'react';  
// import PassengerPicker from './PassengerPicker';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SearchEngine = () => {
//   const navigate = useNavigate();
//   const [tripType, setTripType] = useState('round-trip');
//   const [loading, setLoading] = useState(false);

//   const [fromQuery, setFromQuery] = useState('');
//   const [toQuery, setToQuery] = useState('');
//   const [fromResults, setFromResults] = useState([]); 
//   const [toResults, setToResults] = useState([]);
  
//   const [selectedFromCode, setSelectedFromCode] = useState('');
//   const [selectedToCode, setSelectedToCode] = useState('');
//   const [departureDate, setDepartureDate] = useState('');
  
//   const [showFromList, setShowFromList] = useState(false);
//   const [showToList, setShowToList] = useState(false);

//   // Sabse powerful function jo kisi bhi API structure se data nikal lega
//   const getAirportInfo = (item) => {
//     const title = 
//       item?.presentation?.title || 
//       item?.navigation?.relevantHotelParams?.localizedName || 
//       item?.navigation?.relevantFlightParams?.localizedName ||
//       item?.name || 
//       "Airport";

//     const subtitle = 
//       item?.presentation?.subtitle || 
//       item?.navigation?.relevantHotelParams?.cityName || 
//       item?.address?.cityName ||
//       "Global City";

//     const skyId = 
//       item?.skyId || 
//       item?.navigation?.entityId || 
//       item?.iataCode || 
//       "";

//     return { title, subtitle, skyId };
//   };

//   // LIVE AIRPORT SEARCH - FROM
//   useEffect(() => {
//     const timeoutId = setTimeout(async () => {
//       if (fromQuery.length > 2 && !selectedFromCode) {
//         try {
//           const res = await axios.get(`http://localhost:5000/api/flights/airports?query=${fromQuery}`);
//           // Deep check for Array location in response
//           const data = Array.isArray(res.data) ? res.data : (res.data?.data || []);
//           setFromResults(data);
//           setShowFromList(true);
//           console.log("res",res)
//         } catch (err) { 
//           console.error("Fetch error:", err);
//           setFromResults([]); 
//         }
//       }
//     }, 500);
//     return () => clearTimeout(timeoutId);
//   }, [fromQuery, selectedFromCode]);

//   // LIVE AIRPORT SEARCH - TO
//   useEffect(() => {
//     const timeoutId = setTimeout(async () => {
//       if (toQuery.length > 2 && !selectedToCode) {
//         try {
//           const res = await axios.get(`http://localhost:5000/api/flights/airports?query=${toQuery}`);
//           const data = Array.isArray(res.data) ? res.data : (res.data?.data || []);
//           setToResults(data);
//           setShowToList(true);
//         } catch (err) { 
//           console.error("Fetch error:", err);
//           setToResults([]); 
//         }
//       }
//     }, 500);
//     return () => clearTimeout(timeoutId);
//   }, [toQuery, selectedToCode]);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if(!selectedFromCode || !selectedToCode || !departureDate) {
//         alert("Please select airports from the dropdown suggestions!");
//         return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:5000/api/flights/search`, {
//         params: { source: selectedFromCode, destination: selectedToCode, date: departureDate }
//       });
//       navigate('/search-results', { 
//         state: { 
//           flights: response.data?.data?.itineraries || [], 
//           searchDetails: { fromQuery, toQuery, departureDate, selectedFromCode, selectedToCode } 
//         } 
//       });
//     } catch (error) {
//       alert("Search failed. Ensure backend is running.");
//     }
//     setLoading(false);
//   };

//   return (
//     <section className="relative min-h-[470px] flex items-center justify-center py-12 px-4 bg-cover bg-center" 
//              style={{ backgroundImage: "url('/images/banner (book myflight).jpg.jpeg')" }}>
      
//       <div className="absolute inset-0 bg-black/40" />
      
//       <div className="relative z-10 w-full max-w-7xl bg-black/50 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-8 border border-white/10">
        
//         <div className="flex space-x-6 mb-6">
//           {['one-way', 'round-trip', 'multi-city'].map((type) => (
//             <button key={type} onClick={() => setTripType(type)}
//               className={`px-4 py-2 capitalize transition-all rounded-full text-xs font-bold ${tripType === type ? 'bg-blue-600 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}>
//               {type.replace('-', ' ')}
//             </button>
//           ))}
//         </div>

//         {tripType !== 'multi-city' ? (
//           <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            
//             {/* FROM */}
//             <div className="relative flex flex-col space-y-2">
//               <label className="text-white text-xs font-semibold ml-1">Flying From</label>
//               <input 
//                 type="text" 
//                 value={fromQuery}
//                 onChange={(e) => {setFromQuery(e.target.value); setSelectedFromCode(''); setShowFromList(true)}}
//                 placeholder="Where From?" 
//                 className="p-3.5 border-none rounded-lg bg-white text-black outline-none w-full shadow-inner" 
//               />
//               {showFromList && fromResults.length > 0 && (
//                 <ul className="absolute top-[110%] left-0 w-full bg-white border shadow-2xl rounded-xl z-[100] max-h-64 overflow-y-auto">
//                   {fromResults.map((item, idx) => {
//                     const info = getAirportInfo(item);
//                     return (
//                       <li key={idx} 
//                           onClick={() => {
//                               setFromQuery(info.title); 
//                               setSelectedFromCode(info.skyId);
//                               setShowFromList(false);
//                           }}
//                           className="p-4 hover:bg-blue-50 cursor-pointer border-b last:border-0 flex justify-between items-center text-black">
//                         <div className="flex flex-col text-left">
//                           <span className="font-bold text-sm">{info.title}</span>
//                           <span className="text-[10px] text-gray-500 uppercase">{info.subtitle}</span>
//                         </div>
//                         <span className="font-black text-blue-600 text-xs bg-blue-50 px-2 py-1 rounded">{info.skyId}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>

//             {/* TO */}
//             <div className="relative flex flex-col space-y-2">
//               <label className="text-white text-xs font-semibold ml-1">Flying To</label>
//               <input 
//                 type="text" 
//                 value={toQuery}
//                 onChange={(e) => {setToQuery(e.target.value); setSelectedToCode(''); setShowToList(true)}}
//                 placeholder="Where To?" 
//                 className="p-3.5 border-none rounded-lg bg-white text-black outline-none w-full shadow-inner" 
//               />
//               {showToList && toResults.length > 0 && (
//                 <ul className="absolute top-[110%] left-0 w-full bg-white border shadow-2xl rounded-xl z-[100] max-h-64 overflow-y-auto">
//                   {toResults.map((item, idx) => {
//                     const info = getAirportInfo(item);
//                     return (
//                       <li key={idx} 
//                           onClick={() => {
//                               setToQuery(info.title); 
//                               setSelectedToCode(info.skyId);
//                               setShowToList(false);
//                           }}
//                           className="p-4 hover:bg-blue-50 cursor-pointer border-b last:border-0 flex justify-between items-center text-black">
//                         <div className="flex flex-col text-left">
//                           <span className="font-bold text-sm">{info.title}</span>
//                           <span className="text-[10px] text-gray-500 uppercase">{info.subtitle}</span>
//                         </div>
//                         <span className="font-black text-blue-600 text-xs bg-blue-50 px-2 py-1 rounded">{info.skyId}</span>
//                       </li>
//                     );
//                   })}
//                 </ul>
//               )}
//             </div>

//             <div className="flex flex-col space-y-2">
//               <label className="text-white text-xs font-semibold ml-1">Departure Date</label>
//               <input type="date" required value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} className="p-3.5 border-none rounded-lg bg-white text-black w-full shadow-inner" />
//             </div>

//             <div className="flex flex-col space-y-2 text-black">
//               <label className="text-white text-xs font-semibold ml-1">Travellers</label>
//               <PassengerPicker />
//             </div>

//             <button type="submit" disabled={loading} className="bg-blue-600 text-white font-black py-4 rounded-lg hover:bg-blue-700 transition transform active:scale-95 shadow-lg disabled:bg-gray-400 h-[52px]">
//               {loading ? '...' : 'SEARCH FLIGHTS'}
//             </button>
//           </form>
//         ) : (
//           <div className="p-10 text-center border-2 border-dashed border-white/20 rounded-lg bg-white/5 text-white font-medium">
//               ✈️ Multi-City booking is currently under maintenance.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default SearchEngine;