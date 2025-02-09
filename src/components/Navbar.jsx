import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/UgaMix.svg";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img src={Logo} alt="" />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/about" className="text-[#ffe67b] transition duration-200 hover:underline ">About UgaMix</Link>
          <Link to="/support" className="text-[#ffe67b] hover:underline transition duration-200">Support</Link>
          <Link to="/blog" className="text-[#ffe67b] hover:underline transition duration-200">Blog</Link>
        </nav>
        
        {/* Order Now Button */}
        <Link to="/order" className="hidden md:block bg-[#ffe67b] text-black px-4 py-2 rounded-sm hover:bg-black hover:text-[#ffe67b] transition duration-200 hover:border-[#ffe67b] border-[#ffe67b] border-2">
          Order Now
        </Link>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#ffe67b] transition duration-500 ease-in-out cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
  <nav className="md:hidden bg-black border-t p-4 space-y-3 transition duration-1000">
    <Link 
      to="/about" 
      className="block text-[#ffe67b] transition duration-200 hover:underline" 
      onClick={() => setIsOpen(false)}
    >
      About UgaMix
    </Link>
    
    <Link 
      to="/support" 
      className="block text-[#ffe67b] transition duration-200 hover:underline" 
      onClick={() => setIsOpen(false)}
    >
      Support
    </Link>
    
    <Link 
      to="/blog" 
      className="block text-[#ffe67b] transition duration-200 hover:underline" 
      onClick={() => setIsOpen(false)}
    >
      Blog
    </Link>
    
    <Link 
      to="/order" 
      className="inline-block bg-[#ffe67b] text-black px-4 py-2 rounded-sm hover:bg-black hover:text-[#ffe67b] transition duration-200 hover:border-[#ffe67b] border-[#ffe67b] border-2"
      onClick={() => setIsOpen(false)}
    >
      Order Now
    </Link>
  </nav>
)}
    </header>
  );
}
