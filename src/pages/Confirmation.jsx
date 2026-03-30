import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Home, Plane } from 'lucide-react';

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 text-black">
        <div className="text-center p-10 bg-white shadow rounded-lg">
          <p className="text-gray-500 mb-4">No booking found.</p>
          <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const { flight, passenger } = bookingDetails;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 text-black">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Success Animation & Header */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-4">
            <CheckCircle size={80} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-black text-gray-800">Booking Confirmed!</h1>
          <p className="text-gray-500">Your ticket has been sent to {passenger.email}</p>
        </motion.div>

        {/* Digital Ticket Card */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Ticket Header */}
          <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Plane size={24} />
              <span className="font-bold tracking-widest uppercase text-sm">Boarding Pass</span>
            </div>
            <p className="text-xs opacity-80 uppercase">Gate closes 45m before departure</p>
          </div>

          <div className="p-8">
            {/* Passenger Info */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-[10px] uppercase text-gray-400 font-bold">Passenger</p>
                <p className="font-bold text-lg">{passenger.firstName} {passenger.lastName}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase text-gray-400 font-bold">Flight No.</p>
                <p className="font-bold text-lg text-blue-600">{flight.airline}</p>
              </div>
            </div>

            {/* Journey Details */}
            <div className="flex items-center justify-between border-y border-dashed border-gray-200 py-6 mb-8">
              <div className="text-center">
                <p className="text-3xl font-black">{flight.fromCode}</p>
                <p className="text-xs text-gray-500">{flight.depTime}</p>
              </div>
              <div className="flex flex-col items-center flex-grow">
                <p className="text-[10px] text-gray-400 mb-1">{flight.duration}</p>
                <div className="w-full h-[1px] bg-gray-300 relative">
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-white px-2">✈️</div>
                </div>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black">{flight.toCode}</p>
                <p className="text-xs text-gray-500">{flight.arrTime}</p>
              </div>
            </div>

            {/* Footer Info */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[10px] uppercase text-gray-400 font-bold">Total Paid</p>
                <p className="text-2xl font-black text-gray-800">{flight.price}</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-xl">
                 <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=BOOKING_SUCCESS" 
                  alt="QR Code" 
                  className="w-12 h-12 opacity-70"
                 />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <button 
            onClick={() => window.print()}
            className="flex-1 bg-gray-800 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition"
          >
            <Download size={20} /> Download Ticket
          </button>
          <button 
            onClick={() => navigate('/')}
            className="flex-1 bg-white border-2 border-blue-600 text-blue-600 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-50 transition"
          >
            <Home size={20} /> Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default Confirmation;