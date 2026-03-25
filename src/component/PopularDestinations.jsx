import React from 'react';
import { Link } from 'react-router-dom';

const PopularDestinations = () => {
  const destinations = [
    { name: "London, United Kingdom", img: "/images/Banner.jpg.jpeg", gridArea: "lg:col-start-1 lg:row-start-1" },
    { name: "Paris, France", img: "/images/Banner.jpg.jpeg", gridArea: "lg:col-start-1 lg:row-start-2" },
    { name: "Cancun, Mexico", img: "/images/Banner.jpg.jpeg", gridArea: "lg:col-start-2 lg:row-span-2" },
    { name: "Tokyo, Japan", img: "/images/Banner.jpg.jpeg", gridArea: "lg:col-start-3 lg:row-start-1" },
    { name: "San Juan, Puerto Rico", img: "/images/Banner.jpg.jpeg", gridArea: "lg:col-start-3 lg:row-start-2" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Popular Destination</h2>
          <Link to="/sitemap" className="text-blue-600 font-semibold hover:underline flex items-center gap-1">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          {destinations.map((dest, i) => (
            <div key={i} className={`relative overflow-hidden rounded-3xl group cursor-pointer ${dest.gridArea}`}>
              <img 
                src={dest.img} 
                alt={dest.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-medium">{dest.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;