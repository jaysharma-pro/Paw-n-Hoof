import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#f8f1e7] border-b border-[#e6dccd]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"   // replace with your logo path
            alt="Paws & Hope"
            className="h-8 w-8"
          />
          <span className="font-semibold text-lg text-gray-800">
            Paws & Hope
          </span>
        </div>

        {/* Center - Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-600 cursor-pointer">Adopt</li>
          <li className="hover:text-orange-600 cursor-pointer">Donate</li>
          <li className="hover:text-orange-600 cursor-pointer">Volunteer</li>
          <li className="hover:text-orange-600 cursor-pointer">Stories</li>
        </ul>

        {/* Right - Button */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition">
          Donate Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
