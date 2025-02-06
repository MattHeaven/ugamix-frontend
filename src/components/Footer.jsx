import React, { useState } from 'react';
import Logo from '../assets/UgaMix.svg';
import Placeholder from '../assets/cookware-2.png';


function Footer() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
    };

    
  
    return (
      <footer className="w-full bg-black text-white py-12 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#ffe67b]">
            Make your order of UgaMix today! Leave your contact information below, and someone from our sales team will contact you.
          </h2>
        </div>
  
        {/* Contact Form */}
        <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-6">
          <div className="w-64 h-64 rounded-lg flex items-center justify-center">
            <img src={Placeholder} alt="" />
          </div>
  
          <div className="flex-1">
            {submitted ? (
              <p className="text-[#ffe67b] text-lg">Thank you, someone from our team will reach out.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" placeholder="e.g. John Doe" className="w-full px-4 py-3 rounded-lg bg-white text-black" required />
                <input type="text" placeholder="e.g. +254 712 00000" className="w-full px-4 py-3 rounded-lg bg-white text-black" required />
                <input type="email" placeholder="e.g. johndoe@example.com" className="w-full px-4 py-3 rounded-lg bg-white text-black" required />
                <button type="submit" className="w-full px-6 py-3 bg-[#ffe67b] text-black rounded-lg text-lg hover:bg-yellow-500 cursor-pointer">
                  Order Now
                </button>
              </form>
            )}
          </div>
        </div>
  
        {/* Footer Navigation */}
        <div className="max-w-5xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-sm text-gray-300">
          <div>
            <h3 className="text-[#ffe67b] font-bold mb-3">NAVIGATION</h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">What We Do</a></li>
              <li><a href="">Background</a></li>
              <li><a href="">Donate</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#ffe67b] font-bold mb-3">WHAT WE DO</h3>
            <ul>
              <li><a href="">Lorem ipsum dolor</a></li>
              <li><a href="">Adipiscing gravida</a></li>
              <li><a href="">Mauris turpis</a></li>
              <li><a href="">Imperdiet scelerisque</a></li>
              <li><a href="">Neque pharetra</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#ffe67b] font-bold mb-3">LEGAL</h3>
            <ul>
              <li><a href="">General Info</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#ffe67b] font-bold mb-3">TALK TO US</h3>
            <ul>
              <li>
                <a href="mailto:support@ugamix.com">support@ugamix.com</a>
              </li>
              <li><a href="">+254 702 002002</a></li>
              <li><a href="">Facebook</a></li>
              <li><a href="">LinkedIn</a></li>
              <li><a href="">Twitter</a></li>
            </ul>
          </div>
        </div>
  
        {/* Footer Branding */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <a href='#' className= "font-bold text-lg flex items-center justify-center gap-2 px-4">
            <img src={Logo} alt="" className='md-2' />
          </a>
          <p>&copy; {new Date().getFullYear()} UgaMix Limited. All Rights Reserved.</p>
        </div>
      </footer>
    );
}

export default Footer