import Link from 'next/link';
import { FiHome, FiGrid, FiUser, FiShoppingCart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-inner">
      <div className="container mx-auto px-4 py-2 flex justify-around items-center">
        <Link href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <FiHome className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <FiGrid className="w-6 h-6" />
          <span className="text-xs">Categories</span>
        </Link>
        <Link href="/account" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <FiUser className="w-6 h-6" />
          <span className="text-xs">Account</span>
        </Link>
        <Link href="/cart" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
          <FiShoppingCart className="w-6 h-6" />
          <span className="text-xs">Cart</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
