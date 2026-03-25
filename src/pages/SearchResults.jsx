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