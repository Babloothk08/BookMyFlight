import React from 'react';
import SearchEngine from '../component/SearchEngine';
import PopularDeals from '../component/PopularDeals';
import PopularDestinations from '../component/PopularDestinations';
import TopFlightDeals from '../component/TopFlightDeals';
import FAQSection from '../component/FAQSection';
import Newsletter from '../component/Newsletter';
import BlogSlider from '../component/BlogSlider';

const Home = () => {
  return (
    <div>
      <SearchEngine />
      <PopularDeals/>
      <PopularDestinations />
      <TopFlightDeals/>
      <BlogSlider/>
      
      {/* Yahan aap future mein 'Why Choose Us' ya 'Top Deals' section dal sakte hain */}
      <FAQSection/>
      <Newsletter />
    </div>
  );
};

export default Home;