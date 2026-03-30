import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbra from './component/Navbar'; // Spelling check kar lena Navbra ya Navbar
import Footer from './component/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import BookingDetail from './pages/BookingDetail';
import Success from './pages/Success';
import Sitemap from './pages/Sitemap';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import MyBooking from './pages/MyBooking';
import Packages from './pages/Packages';
import ContactUsPage from './pages/ContactUsPage';
import AboutUs from './pages/AboutUs';
import ChatWidget from './pages/ChatWidget';
import LoginPage from './pages/user/Login';
import Signup from './pages/user/Singup';
import SearchEngine from './component/SearchEngine';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbra />
        <ChatWidget/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/booking" element={<BookingDetail />} />
            <Route path="/success" element={<Success />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path='/my-booking' element={<MyBooking/>}/>
            <Route path='/packages' element={<Packages/>}/>
            <Route path='/contact-us' element={<ContactUsPage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/search' element={<SearchEngine/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/booking-api" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;