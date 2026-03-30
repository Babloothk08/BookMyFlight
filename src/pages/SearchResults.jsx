import React from 'react';
import FlightCard from '../component/FlightCard';

const SearchResults = () => {
  // Dummy Data for Flights
  const dummyFlights = [
    { id: 1, airline: 'Air India', flightNumber: 'AI-101', depTime: '10:00 AM', arrTime: '01:00 PM', fromCode: 'DEL', toCode: 'BOM', duration: '3h 00m', stops: 'Non-stop', price: '120' },
    { id: 2, airline: 'IndiGo', flightNumber: '6E-502', depTime: '02:30 PM', arrTime: '06:45 PM', fromCode: 'DEL', toCode: 'BOM', duration: '4h 15m', stops: '1 Stop', price: '95' },
    { id: 3, airline: 'Emirates', flightNumber: 'EK-202', depTime: '08:00 PM', arrTime: '11:30 PM', fromCode: 'DEL', toCode: 'DXB', duration: '3h 30m', stops: 'Non-stop', price: '350' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Search Summary Header */}
        <div className="bg-blue-600 text-white p-4 rounded-xl mb-8 flex justify-between items-center shadow-lg">
          <div>
            <p className="text-sm opacity-80">Modify Search</p>
            <h2 className="text-lg font-bold">New Delhi (DEL) → Mumbai (BOM)</h2>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-lg text-sm transition">
            Edit
          </button>
        </div>

        {/* Results List */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Showing {dummyFlights.length} Flights</h3>
          {dummyFlights.map(flight => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SearchResults;











// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import FlightCard from '../component/FlightCard';

// const SearchResults = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   // SearchEngine se bheja gaya data nikalna
//   const flights = location.state?.flights || [];
//   const searchDetails = location.state?.searchDetails || { fromQuery: 'Origin', toQuery: 'Destination' };

//   return (
//     <div className="min-h-screen bg-gray-50 pt-24 pb-12 text-black">
//       <div className="container mx-auto px-4 max-w-5xl">
        
//         {/* Dynamic Search Summary Header */}
//         <div className="bg-blue-600 text-white p-4 rounded-xl mb-8 flex justify-between items-center shadow-lg">
//           <div>
//             <p className="text-sm opacity-80">Search Results for</p>
//             <h2 className="text-lg font-bold">
//               {searchDetails.fromQuery} → {searchDetails.toQuery}
//             </h2>
//             <p className="text-xs opacity-75">{searchDetails.departureDate}</p>
//           </div>
//           <button 
//             onClick={() => navigate(-1)} // Wapas search page par jaane ke liye
//             className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-lg text-sm transition"
//           >
//             Edit Search
//           </button>
//         </div>

//         {/* Results List */}
//         <div className="space-y-4">
//           <h3 className="text-xl font-bold text-gray-700 mb-4">
//             Showing {flights.length} Flights
//           </h3>
          
//           {flights.length > 0 ? (
//             flights.map((flight, index) => (
//               // RapidAPI ka data structure flightCard ke props ke hisaab se map karein
//               <FlightCard key={flight.id || index} flight={{
//                 id: flight.id,
//                 airline: flight.legs[0].carriers.marketing[0].name,
//                 logo: flight.legs[0].carriers.marketing[0].logoUrl,
//                 depTime: new Date(flight.legs[0].departure).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
//                 arrTime: new Date(flight.legs[0].arrival).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
//                 fromCode: flight.legs[0].origin.displayCode,
//                 toCode: flight.legs[0].destination.displayCode,
//                 duration: Math.floor(flight.legs[0].durationInMinutes / 60) + "h " + (flight.legs[0].durationInMinutes % 60) + "m",
//                 stops: flight.legs[0].stopCount === 0 ? 'Non-stop' : `${flight.legs[0].stopCount} Stop`,
//                 price: flight.price.formatted
//               }} />
//             ))
//           ) : (
//             <div className="text-center py-20 bg-white rounded-xl shadow">
//               <p className="text-gray-500">No flights found for this route or date. Please try another search.</p>
//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default SearchResults;