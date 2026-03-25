import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const BlogSlider = () => {
  const scrollRef = useRef(null);

  const blogs = [
    { 
      id: 1, 
      title: "The most amazing waterfalls on different continents", 
      desc: "Waterfalls are the best natural sights for most, though it&rsquo;s best to see them...",
      img: "https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=600", // Waterfall img
      cat: "DESTINATION"
    },
    { 
      id: 2, 
      title: "The best skyscrapers around the world for those...", 
      desc: "The architecture in the last century has changed a lot from that of the previous...",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600", // City skyline img
      cat: "ADVENTURES"
    },
    { 
      id: 3, 
      title: "The most amazing waterfalls on different continents", 
      desc: "Waterfalls are the best natural sights for most, though it&rsquo;s best to see them...",
      img: "https://images.unsplash.com/photo-1546268060-2592ff93ee24?w=600", // Waterfall img
      cat: "TRAVEL FOODIES"
    },
    { 
      id: 4, 
      title: "The best skyscrapers around the world for those...", 
      desc: "The architecture in the last century has changed a lot from that of the previous...",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600", // City skyline img
      cat: "SEASON GATEWAY  "
    },
    
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      // Exact single container scroll (taaki agle do cards aayein)
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };
  

  return (
    <section className="py-10 bg-white overflow-hidden md:block hidden">
      <div className="container mx-auto px-4 max-w-7xl relative">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 tracking-tight">Our Blog and Articles</h2>
          
          {/* Circular Navigation Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-gray-100 text-[#1e40af] flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-95"
            >
              <span className="text-xl">←</span>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth no-scrollbar gap-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="flex min-w-full lg:min-w-[calc(50%-16px)] bg-[#f8fafc] rounded-3xl group overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              
              {/* Image Section (Left - Exact dimensions) */}
              <div className="w-[45%] h-auto overflow-hidden shrink-0">
                <img 
                  src={blog.img} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-l-3xl" 
                />
              </div>

              {/* Text Content (Right - Exactly split) */}
              <div className="w-[55%] p-10 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-md font-bold text-black/60 uppercase tracking-[0.2em]">
                    {blog.cat}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-blue-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors cursor-pointer">
                  {blog.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2" dangerouslySetInnerHTML={{ __html: blog.desc }} />
                
                <div className="flex items-center text-blue-600 font-medium text-sm cursor-pointer group/link uppercase ">
                  <Link to="/blog">Read More </Link>
                  <span className="ml-2 group-hover/link:ml-3 transition-all duration-300">→</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSlider;