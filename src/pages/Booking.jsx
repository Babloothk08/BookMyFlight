import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, User, Mail, Phone, Ticket } from 'lucide-react';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Previous page (FlightCard) se selected flight nikalna
  const selectedFlight = location.state?.selectedFlight;

  // 2. Passenger Details State
  const [passenger, setPassenger] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  // 3. Form Submission Handler
  const handleFinalBooking = (e) => {
    e.preventDefault();
    if (!passenger.firstName || !passenger.lastName || !passenger.email) {
      alert("Please fill all required details.");
      return;
    }

    // Yahan aap apna final booking logic (jaise final confirmation API call ya state update) add karenge
    console.log("Final Booking Details:", {
      flight: selectedFlight,
      passenger: passenger,
    });

    // Confirmation page par bhejein
    navigate('/confirmation', { state: { bookingDetails: { flight: selectedFlight, passenger: passenger } } });
  };

  // Agar user direct direct dynamic logic ke through agale page par jaata hai toh flight check
  if (!selectedFlight) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center p-10 bg-white shadow rounded-lg text-black">
          <p className="text-gray-500 mb-4">No flight selected. Please go back.</p>
          <button onClick={() => navigate(-1)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Back to Search
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-10 flex items-center gap-2">
          <Ticket size={28} className="text-blue-600" /> Complete Your Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Passenger Details Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <form onSubmit={handleFinalBooking} className="space-y-6">
              
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input type="text" placeholder="First Name" required value={passenger.firstName} onChange={(e) => setPassenger({...passenger, firstName: e.target.value})} className="w-full p-3.5 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                  <input type="text" placeholder="Last Name" required value={passenger.lastName} onChange={(e) => setPassenger({...passenger, lastName: e.target.value})} className="w-full p-3.5 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input type="email" placeholder="Email Address" required value={passenger.email} onChange={(e) => setPassenger({...passenger, email: e.target.value})} className="w-full p-3.5 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input type="tel" placeholder="Phone Number (Optional)" value={passenger.phone} onChange={(e) => setPassenger({...passenger, phone: e.target.value})} className="w-full p-3.5 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none transition" />
              </div>

              {/* Confirm Button */}
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-lg hover:bg-blue-700 transition-all transform active:scale-95 shadow-md">
                Confirm & Book Now
              </button>
            </form>
          </motion.div>

          {/* Selected Flight Summary */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 space-y-4 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {selectedFlight.logo ? (
                  <img src={selectedFlight.logo} alt={selectedFlight.airline} className="w-10 h-10 object-contain" />
                ) : (
                  <Plane size={24} className="text-gray-400" />
                )}
                <div>
                  <p className="font-bold text-lg text-gray-800">{selectedFlight.airline}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Selected Flight</p>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-black">
                <div className="text-center">
                  <p className="text-2xl font-bold">{selectedFlight.depTime}</p>
                  <p className="text-sm text-gray-500 font-semibold">{selectedFlight.fromCode}</p>
                </div>
                <div className="text-center font-bold text-blue-600 p-2 rounded-full bg-blue-50 text-xs">
                  {selectedFlight.duration}
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{selectedFlight.arrTime}</p>
                  <p className="text-sm text-gray-500 font-semibold">{selectedFlight.toCode}</p>
                </div>
              </div>
            </div>

              <div className="border-t border-gray-100 pt-4 mt-4 flex items-center justify-between font-bold text-gray-800">
                <p className="text-lg">Total Price:</p>
                <p className="text-3xl font-extrabold text-blue-700">{selectedFlight.price}</p>
              </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Booking;