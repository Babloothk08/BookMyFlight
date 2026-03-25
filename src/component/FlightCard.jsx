import React from 'react';
import { useNavigate } from 'react-router-dom';

const FlightCard = ({ flight }) => {
    const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow mb-4">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6">
        
        {/* Airline Info */}
        <div className="flex items-center space-x-4 w-full md:w-1/4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-bold text-blue-600">
            {flight.airline[0]}
          </div>
          <div>
            <p className="font-bold text-gray-800">{flight.airline}</p>
            <p className="text-xs text-gray-500">{flight.flightNumber}</p>
          </div>
        </div>

        {/* Journey Details */}
        <div className="flex items-center justify-between w-full md:w-2/4 px-4">
          <div className="text-center">
            <p className="text-xl font-bold">{flight.depTime}</p>
            <p className="text-sm text-gray-500 font-semibold">{flight.fromCode}</p>
          </div>
          
          <div className="flex flex-col items-center flex-grow px-4">
            <p className="text-xs text-gray-400 mb-1">{flight.duration}</p>
            <div className="relative w-full h-[2px] bg-gray-300">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px]">✈️</div>
            </div>
            <p className="text-xs text-green-600 mt-1">{flight.stops}</p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold">{flight.arrTime}</p>
            <p className="text-sm text-gray-500 font-semibold">{flight.toCode}</p>
          </div>
        </div>

        {/* Price & Action */}
        <div className="w-full md:w-1/4 text-right border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6">
          <p className="text-xs text-gray-500">Price per adult</p>
          <p className="text-2xl font-black text-gray-900">${flight.price}</p>
          <button 
      onClick={() => navigate('/booking')} // Click par redirect
      className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition"
    >
      Book Now
    </button>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;