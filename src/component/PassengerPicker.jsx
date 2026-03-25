import React, { useState } from 'react';

const PassengerPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabin, setCabin] = useState('Economy');

  // Counter Function
  const updateCount = (type, operation) => {
    setPassengers((prev) => {
      const currentVal = prev[type];
      if (operation === 'inc') return { ...prev, [type]: currentVal + 1 };
      if (operation === 'dec' && currentVal > 0) {
        // Adult minimum 1 hona chahiye
        if (type === 'adults' && currentVal === 1) return prev;
        return { ...prev, [type]: currentVal - 1 };
      }
      return prev;
    });
  };

  return (
    <div className="relative w-full">
      {/* <label className="text-sm font-semibold text-gray-700 block mb-2">Travellers & Class</label> */}
      
      {/* Selection Trigger Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 border rounded-lg cursor-pointer bg-white flex justify-between items-center hover:border-blue-500"
      >
        <div className="truncate">
          <span className="font-medium">{passengers.adults + passengers.children + passengers.infants} Traveller(s)</span>
          <span className="text-gray-400 text-sm ml-2">| {cabin}</span>
        </div>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full md:w-80 bg-white border shadow-2xl rounded-xl p-4 z-50">
          
          {/* Passenger Types */}
          {['adults', 'children', 'infants'].map((type) => (
            <div key={type} className="flex justify-between items-center mb-4">
              <div>
                <p className="font-bold capitalize">{type}</p>
                <p className="text-xs text-gray-500">
                  {type === 'adults' ? '12+ yrs' : type === 'children' ? '2-12 yrs' : 'Under 2 yrs'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => updateCount(type, 'dec')}
                  className="w-8 h-8 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-50"
                >-</button>
                <span className="font-bold w-4 text-center">{passengers[type]}</span>
                <button 
                  onClick={() => updateCount(type, 'inc')}
                  className="w-8 h-8 rounded-full border border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-50"
                >+</button>
              </div>
            </div>
          ))}

          <hr className="my-4" />

          {/* Cabin Selection */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {['Economy', 'Premium', 'Business', 'First'].map((cls) => (
              <button
                key={cls}
                onClick={() => setCabin(cls)}
                className={`text-xs p-2 rounded border transition ${
                  cabin === cls ? 'bg-blue-600 text-white border-blue-600' : 'hover:border-blue-400'
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default PassengerPicker;