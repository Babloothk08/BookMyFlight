import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingDetail = () => {
  const navigate = useNavigate();
  
  // State to manage form data
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    title: 'Mr.'
  });

  // Handle Input Changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submission Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Basic Validation
    if (!formData.email || !formData.phone || !formData.firstName || !formData.lastName) {
      alert("Bhai, saari details toh bhar do! ✈️");
      return;
    }

    // 2. Simple Email Validation
    if (!formData.email.includes('@')) {
      alert("Email sahi se likho dost!");
      return;
    }

    // 3. Success Par Bhejo
    console.log("Booking Details:", formData);
    // Success page par data pass karne ke liye state ka use kar sakte hain
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Form Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-black text-gray-800 tracking-tight">Review & Book</h2>

            {/* Contact Details Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg">📧</span>
                <h3 className="font-bold text-gray-700">Contact Details</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold text-gray-400 ml-1">Email ID</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="example@mail.com" 
                    onChange={handleInput}
                    className="p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 bg-gray-50 transition-all" 
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold text-gray-400 ml-1">Mobile Number</label>
                  <input 
                    name="phone" 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    onChange={handleInput}
                    className="p-3 border border-gray-200 rounded-xl outline-none focus:border-blue-500 bg-gray-50 transition-all" 
                  />
                </div>
              </div>
            </div>

            {/* Passenger Info Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <span className="bg-orange-100 text-orange-600 p-2 rounded-lg">👤</span>
                <h3 className="font-bold text-gray-700">Passenger Information</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col space-y-1">
                  <label className="text-xs font-bold text-gray-400 ml-1">Title</label>
                  <select name="title" onChange={handleInput} className="p-3 border border-gray-200 rounded-xl bg-gray-50 outline-none focus:border-blue-500">
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                </div>
                <div className="md:col-span-1 flex flex-col space-y-1">
                  <label className="text-xs font-bold text-gray-400 ml-1">First Name</label>
                  <input 
                    name="firstName" 
                    placeholder="Enter First Name" 
                    onChange={handleInput}
                    className="p-3 border border-gray-200 rounded-xl outline-none bg-gray-50 focus:border-blue-500 transition-all" 
                  />
                </div>
                <div className="md:col-span-2 flex flex-col space-y-1">
                  <label className="text-xs font-bold text-gray-400 ml-1">Last Name</label>
                  <input 
                    name="lastName" 
                    placeholder="Enter Last Name" 
                    onChange={handleInput}
                    className="p-3 border border-gray-200 rounded-xl outline-none bg-gray-50 focus:border-blue-500 transition-all" 
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-blue-200 transition-all transform active:scale-[0.98] uppercase tracking-wider">
              Confirm Booking & Proceed ✈️
            </button>
          </div>

          {/* Right Side: Fare Summary Sidebar */}
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold border-b border-gray-50 pb-3 mb-4 text-gray-800">Fare Summary</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Base Fare (1 Traveler)</span>
                  <span className="font-semibold text-gray-700">$350</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fee & Surcharges</span>
                  <span className="font-semibold text-gray-700">$45</span>
                </div>
                <div className="pt-4 border-t border-dashed flex justify-between items-center">
                  <span className="font-bold text-gray-800 uppercase text-xs">Total Amount</span>
                  <span className="font-black text-2xl text-blue-600">$395</span>
                </div>
              </div>
              <div className="mt-6 p-3 bg-blue-50 rounded-xl">
                 <p className="text-[10px] text-blue-500 leading-relaxed text-center font-medium">
                  🔒 Secure checkout with SSL encryption. Your details are safe with us.
                 </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingDetail;