import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { SignInCredentials } from "@/types";
import Modal from "@/ui/Modal";
import { userSignin } from "@/api/auth/user";

interface SignInProps {
  isOpen: boolean;
  closeModal: () => void;
  openSignUp: () => void;
}

const SignIn: React.FC<SignInProps> = ({ isOpen, closeModal, openSignUp }) => {
  const [credentials, setCredentials] = useState<SignInCredentials>({
    username: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!credentials.username.trim()) {
      setError("Username is required.");
      return false;
    }

    if (!credentials.password.trim()) {
      setError("Password is required.");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const result = await userSignin(credentials);
      if (result.success) {
        localStorage.setItem("authToken", result?.token as string);
        closeModal();
      } else {
        setError(result.message || "Sign-in failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <div className="relative mt-1">
            <FaUser className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
            <input
              type="text"
              name="username"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={credentials.username}
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
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>

        <div className="p-1">
          New user?{" "}
          <span
            onClick={openSignUp}
            className="underline text-blue-600 cursor-pointer"
          >
            Sign up
          </span>
        </div>
      </form>
    </Modal>
  );
};

export default SignIn;
