"use client";
import { useState, useEffect } from "react";
import { X, Home, User, Code, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handle closing sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".menu-button")) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  return (
    <>
      {/* Menu Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="menu-button rounded-full border border-white/20 p-3 hover:bg-gray-800 transition-colors duration-200"
          aria-label="Open navigation menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className="w-full h-0.5 bg-white block"></span>
            <span className="w-full h-0.5 bg-white block"></span>
            <span className="w-full h-0.5 bg-white block"></span>
          </div>
        </button>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transition-transform duration-300 ease-in-out sidebar ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header with icon and name */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <div className="flex justify-center items-center relative">
              <span className="w-10 h-10 bg-indigo-600 rounded-full absolute"></span>
              <button className="w-10 h-10 rounded-full border border-white/20 relative z-10 flex items-center justify-center">
                <div className="w-6 flex flex-col gap-1.5">
                  <span className="w-full h-0.5 bg-white block"></span>
                  <span className="w-full h-0.5 bg-white block"></span>
                  <span className="w-full h-0.5 bg-white block"></span>
                </div>
              </button>
            </div>
            <span className="text-indigo-400 font-bold text-xl ml-3">Mayur Rishi</span>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="text-white"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col px-4 py-4 space-y-1">
          <Link
            href="#home"
            className="flex items-center py-3 px-4 bg-purple-800 rounded-md"
          >
            <Home size={20} className="mr-3" />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            href="#about"
            className="flex items-center py-3 px-4 hover:bg-gray-800/60 rounded-md"
          >
            <User size={20} className="mr-3" />
            <span className="font-medium">About</span>
          </Link>

          <Link
            href="#projects"
            className="flex items-center py-3 px-4 hover:bg-gray-800/60 rounded-md"
          >
            <Code size={20} className="mr-3" />
            <span className="font-medium">Projects</span>
          </Link>

          <Link
            href="#contact"
            className="flex items-center py-3 px-4 hover:bg-gray-800/60 rounded-md"
          >
            <Mail size={20} className="mr-3" />
            <span className="font-medium">Contact</span>
          </Link>

          <div className="pt-4"></div>

          <Link
            href="#contact"
            className="flex items-center py-3 px-4 bg-purple-800 rounded-md"
          >
            <Mail size={20} className="mr-3" />
            <span className="font-medium">Contact</span>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
