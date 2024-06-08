"use client";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  return (
    <nav className="flex justify-between items-center md:py-4 px-2 md:px-40">
      <div className="flex gap-10">
        <img src="logo.png" alt="logo" />
        <div className="hidden md:flex gap-6 items-center text-xl">
          <p className={`${activeTab === "home" ? "font-bold text-[#FF5555]" : "font-medium"}`}>Home</p>
          <p className={`${activeTab === "aboutUs" ? "font-bold text-[#FF5555]" : "font-medium"}`}>About Us</p>
          <p className={`${activeTab === "pricing" ? "font-bold text-[#FF5555]" : "font-medium"}`}>Pricing</p>
          <p className={`${activeTab === "features" ? "font-bold text-[#FF5555]" : "font-medium"}`}>Features</p>
        </div>
      </div>
      <button className="bg-black text-white text-lg font-medium cursor-pointer px-8 py-2">Download</button>
    </nav>
  );
};

export default Navbar;
