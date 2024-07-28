import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { SignInCredentials } from "@/types";
import Modal from "@/ui/Modal";
interface SignInProps {
  isOpen: boolean;
  closeModal: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isOpen, closeModal }) => {
  const [credentials, setCredentials] = useState<SignInCredentials>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1">
            <FaUser className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
            <input
              type="email"
              name="email"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={credentials.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mt-1">
            <FaLock className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
            <input
              type="password"
              name="password"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign In
        </button>
      </form>
    </Modal>
  );
};

export default SignIn;
