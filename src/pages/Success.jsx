import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP Animation: Ticket niche se upar aayega aur thoda zoom hoga
    const tl = gsap.timeline();
    
    tl.fromTo(".success-icon", 
      { scale: 0, rotate: -180 }, 
      { scale: 1, rotate: 0, duration: 0.8, ease: "back.out(1.7)" }
    );

    tl.fromTo(".ticket-card", 
      { y: 100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
      "-=0.4"
    );

    tl.from(".ticket-info", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.5
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6 pt-20">
      
      {/* Animated Check Icon */}
      <div className="success-icon w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.4)]">
        <span className="text-white text-4xl font-bold">✓</span>
      </div>

      <h1 className="text-3xl font-black text-white mb-2 text-center">Booking Confirmed!</h1>
      <p className="text-slate-400 mb-10 text-center">Your flight has been reserved. Pack your bags! ✈️</p>

      {/* Ticket Design */}
      <div className="ticket-card bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden relative">
        
        {/* Ticket Header */}
        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
          <div className="ticket-info">
            <p className="text-[10px] uppercase opacity-60 font-bold">Flight Status</p>
            <p className="font-bold tracking-widest text-sm uppercase">Confirmed</p>
          </div>
          <div className="ticket-info text-right">
            <p className="text-[10px] uppercase opacity-60 font-bold">Airline</p>
            <p className="font-bold text-sm uppercase">FlightsChannel Air</p>
          </div>
        </div>

        {/* Journey Details */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-10">
            <div className="ticket-info text-center">
              <h2 className="text-4xl font-black text-slate-800">DEL</h2>
              <p className="text-xs text-slate-400 font-bold uppercase">New Delhi</p>
            </div>
            
            <div className="flex-grow px-6 flex flex-col items-center ticket-info">
              <p className="text-[10px] text-blue-500 font-black mb-1">Non-stop</p>
              <div className="w-full h-[2px] bg-slate-200 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-2 text-blue-600">✈️</div>
              </div>
            </div>

            <div className="ticket-info text-center">
              <h2 className="text-4xl font-black text-slate-800">BOM</h2>
              <p className="text-xs text-slate-400 font-bold uppercase">Mumbai</p>
            </div>
          </div>

          {/* Passenger Info Grid */}
          <div className="grid grid-cols-2 gap-y-6 border-t border-slate-100 pt-8">
            <div className="ticket-info">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Passenger</p>
              <p className="font-bold text-slate-700">Kailash Chand</p>
            </div>
            <div className="ticket-info text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Seat</p>
              <p className="font-bold text-slate-700">12A (Window)</p>
            </div>
            <div className="ticket-info">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Date</p>
              <p className="font-bold text-slate-700">23 Mar 2026</p>
            </div>
            <div className="ticket-info text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase">Class</p>
              <p className="font-bold text-slate-700">Economy</p>
            </div>
          </div>
        </div>

        {/* Barcode Section (Visual only) */}
        <div className="bg-slate-50 p-6 border-t-2 border-dashed border-slate-200 flex flex-col items-center">
          <div className="w-full h-14 bg-[url('https://www.scandit.com/wp-content/themes/scandit/img/barcode-header.png')] bg-repeat-x opacity-20 mb-2"></div>
          <p className="text-[9px] font-mono text-slate-400 tracking-[0.5em]">001122334455-BOOK-FLY</p>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="mt-10 flex space-x-4">
        <button 
          onClick={() => navigate('/')}
          className="bg-white text-slate-900 font-bold px-8 py-3 rounded-2xl hover:bg-blue-50 transition active:scale-95"
        >
          Home
        </button>
        <button 
          onClick={() => window.print()}
          className="bg-blue-600 text-white font-bold px-8 py-3 rounded-2xl hover:bg-blue-700 transition active:scale-95 shadow-lg shadow-blue-500/30"
        >
          Download PDF 📥
        </button>
      </div>

    </div>
  );
};

export default Success;