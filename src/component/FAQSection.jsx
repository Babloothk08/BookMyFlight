import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // Pehla wala open rakhenge default

  const faqs = [
    { 
      q: "Why you should book airtickets from FlightsChannel website?", 
      a: "Saving money on air tickets is an art and FlightsChannel has all the right tools which will help you to book cheap air tickets. For air travel usually, travelers prefer to book directly through popular websites. But FlightsChannel is the best flight booking agency when it comes to finding all the cheapest available deals both online and offline. The agents at FlightsChannel will help you to find the best deal over the call too." 
    },
    { q: "What is the best possible way to buy air tickets at a reasonable cost?", a: "Booking in advance and staying flexible with your dates is key." },
    { q: "How to search for the best deal or find the latest offer on FlightsChannel?", a: "You can use our search engine or call our toll-free number for exclusive offline deals." },
    { q: "How you can ensure that your flight reservation with FlightsChannel has been successfully completed?", a: "Once booked, you will receive a confirmation email with your e-ticket and booking reference." },
    { q: "Can I book airtickets for international flights on your website?", a: "Yes, we offer both domestic and international flight bookings globally." },
    { q: "Can I book round-trip and one-way airtickets?", a: "Absolutely, you can select your trip type in the search engine." },
    { q: "Can I book airtickets for multiple passengers in one transaction?", a: "Yes, our passenger picker allows you to add multiple adults, children, and infants." },
    { q: "Do you offer last-minute airtickets?", a: "Yes, we have special deals for last-minute travelers depending on airline availability." },
    { q: "Why is my airticket price higher than the original search result?", a: "Prices are dynamic and can change in real-time based on airline availability." },
    { q: "How can I use promo codes when booking airtickets?", a: "You can apply promo codes on the payment page before final checkout." }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          FAQ About Air Ticket Reservation
        </h2>
        
        <div className="grid grid-cols-1 gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-[#2b59ff] border-[#2b59ff] shadow-lg' : 'bg-white border-gray-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-4 md:p-5 text-left flex justify-between items-center group"
                >
                  <div className="flex items-center gap-4">
                    {/* Q Icon */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0 ${
                      isOpen ? 'bg-white text-[#2b59ff]' : 'bg-[#2b59ff] text-white'
                    }`}>
                      Q
                    </div>
                    <span className={`font-semibold text-[15px] md:text-[16px] ${
                      isOpen ? 'text-white' : 'text-gray-700'
                    }`}>
                      {faq.q}
                    </span>
                  </div>
                  
                  {/* Arrow Icon */}
                  <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                </button>

                {/* Answer Area */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-5 pb-5 ml-11 border-t border-white/20 pt-4 flex gap-4">
                    {/* A Icon */}
                    <div className="w-7 h-7 rounded-full bg-white text-[#2b59ff] flex items-center justify-center text-[12px] font-bold shrink-0">
                      A
                    </div>
                    <p className="text-white text-[14px] leading-relaxed opacity-90">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;