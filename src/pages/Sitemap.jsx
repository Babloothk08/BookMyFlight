import React, { useEffect } from 'react';

const Sitemap = () => {
  const sitemapData = [
    {
      title: "Top Destinations",
      items: [
        "Flights To Las Vegas", "Flights To Orlando", "Flights To New York City", "Flights To Miami", 
        "Flights To Los Angeles", "Flights To Fort Lauderdale", "Flights To Atlanta", "Flights To Denver", 
        "Flights To San Francisco", "Flights To San Juan", "Flights To Chicago", "Flights To Dallas", 
        "Flights To Houston", "Flights To Phoenix", "Flights To Seattle", "Flights To Tampa"
      ]
    },
    {
      title: "Top Routes",
      items: [
        "New York City to London", "Boston to Los Angeles", "Chicago to Orlando", "Miami to New York City", 
        "Atlanta to Las Vegas", "Dallas to Los Angeles", "San Francisco to Tokyo", "New York City to Paris", 
        "Los Angeles to Seattle", "Denver to Chicago", "Houston to Cancun", "Washington to Miami", 
        "Philadelphia to Orlando", "Phoenix to Las Vegas", "Charlotte to New York", "Seattle to San Francisco"
      ]
    },
    {
      title: "Top Airlines",
      items: [
        "American Airlines", "Delta Airlines", "United Airlines", "Southwest Airlines", 
        "Alaska Airlines", "JetBlue Airways", "Spirit Airlines", "Frontier Airlines", 
        "Hawaiian Airlines", "British Airways", "Lufthansa", "Emirates", 
        "Qatar Airways", "Air France", "Air Canada", "Aeromexico"
      ]
    }
  ];

  useEffect(() => {
      window.scroll(0, 0);
    });

  return (
    <div className="bg-[#f8fafc] min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <h1 className="text-3xl font-black text-gray-800 mb-10 pb-6 border-b border-gray-100 text-center">
            Sitemap
          </h1>

          <div className="space-y-12">
            {sitemapData.map((section, idx) => (
              <div key={idx}>
                {/* Header with Red Left Border */}
                <h2 className="text-xl font-bold text-[#1e40af] border-l-[4px] border-[#ef4444] pl-4 mb-6 uppercase tracking-wide">
                  {section.title}
                </h2>

                {/* Grid for Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-6">
                  {section.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="text-[14px] text-gray-600 hover:text-[#2563eb] cursor-pointer flex items-center group transition-colors"
                    >
                      <span className="text-[#94a3b8] group-hover:text-[#2563eb] mr-2 text-[10px]">
                        »
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Extra Info (Optional) */}
          <div className="mt-16 p-6 bg-blue-50 rounded-2xl text-center">
            <p className="text-sm text-blue-600 font-medium">
              Can't find what you're looking for? Call our travel experts 24/7 at 
              <span className="font-bold ml-1">+1-844-609-9922</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;