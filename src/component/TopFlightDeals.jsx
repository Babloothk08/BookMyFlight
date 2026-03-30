import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopFlightDeals = () => {
  const [dealType, setDealType] = useState("domestic")

  const domesticFlight = [
    { route: "Los Angeles to Las Vegas", price: "136.89", date: "07 Apr 26", img: "/domesticFlight/Domestic Flight deals -  las vegas - Copy.jpg.jpeg" },
    { route: "New York to Atlanta", price: "313.90", date: "07 Apr 26", img: "/domesticFlight/Domestic Flight deals - Atlanta - Copy.jpg.jpeg" },
    { route: "Washington to Miami", price: "253.89", date: "07 Apr 26", img: "/domesticFlight/Domestic Flight deals -  Miami - Copy.jpg.jpeg" },
    { route: "New York to Orlando", price: "373.89", date: "07 Apr 26", img: "/domesticFlight/Domestic Flight deals - Orlando - Copy.jpg.jpeg" },
    { route: "Atlanta to Las vegas", price: "278.89", date: "08 Apr 26", img: "/domesticFlight/Las Vegas.jpg.jpeg" },
  ];

 const internationalFlight = [
  {route: "Chicago to Dublin", price: "709.9", date:"09 Apr 26", img: "/internationalFlight/International Flight deals Dublin - Copy.jpg.jpeg"},
  {route: "New York to London", price: "505.7", date:"09 Apr 26", img:"/internationalFlight/International Flight deals London - Copy.jpg.jpeg"},
  {route: "Los Angeles to Tokyo", price: "780.7", date:"09 Apr 26", img:"/internationalFlight/International Flight deals Tokyo - Copy.jpg.jpeg"},
  {route: "Las Vegas to Cancun", price:"267.07", date:"09 Apr 26", img:"/internationalFlight/International Flight deals Cancun.jpg.jpeg"},
  {route:"Atlanta to Dubai", price:"1067.60", date:"09 Apr 26", img:"/internationalFlight/International Flight deals Dubai - Copy.jpg.jpeg"}
 ];

 const deals = dealType === "domestic" ? domesticFlight : internationalFlight;


  return (
    <section className="py-12 bg-white md:block hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex space-x-4 mb-8">
          <button onClick={() => setDealType("domestic")}
          className={`${dealType === "domestic" ? "bg-blue-600 text-white" : "bg-white text-gray-500 border"} px-6 py-3 rounded-xl font-bold cursor-pointer`}>
          Top Domestic Flight</button>
          
          <button onClick={() => setDealType("international")}
            className={`${dealType === "international" ? "bg-blue-600 text-white" : "bg-white text-gray-500 border"} px-6 py-3 rounded-xl font-bold cursor-pointer`}>International Flight Deals</button>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <tbody>
              {deals.map((deal, i) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors group">
                  <td className="p-5 flex items-center space-x-4">
                    <img src={deal.img} className="w-12 h-12 rounded-full object-cover" alt="city" />
                    <span className="font-bold text-gray-700">{deal.route}</span>
                  </td>
                  <td className="p-5 font-black text-gray-900">${deal.price}</td>
                  <td className="p-5 text-gray-500 font-medium">{deal.date}</td>
                  <td className="p-5 text-right">
                    <Link to="/search"><button className="text-blue-600 font-bold hover:underline group-hover:pr-2 transition-all">Book Now</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        
      </div>
    </section>
  );
};

export default TopFlightDeals;