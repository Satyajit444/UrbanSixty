"use client";

import { useState } from "react";
import { FiUser, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center w-1/2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <FiUser className="w-6 h-6 text-gray-600 cursor-pointer" />
          <FiShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
