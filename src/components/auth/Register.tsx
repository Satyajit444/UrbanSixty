import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { SignUpCredentials } from "@/types";
import Modal from "@/ui/Modal";
import { userRegister } from "@/api/auth/user";
import { useDispatch } from "react-redux";
import { showToast } from "@/provider/redux/others/ToastSlice";
import { AppDispatch } from "@/provider/redux/store";

interface RegisterProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Register: React.FC<RegisterProps> = ({ isOpen, closeModal }) => {
  const [credentials, setCredentials] = useState<SignUpCredentials>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim spaces
    }));
    // Clear error for the current field
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!credentials.username || credentials.username.length === 0) {
      newErrors.username = "Username is required";
    } else if (/^\s*$/.test(credentials.username)) {
      newErrors.username = "Username cannot be just white spaces";
    }

    if (!credentials.email || credentials.email.length === 0) {
      newErrors.email = "Email is required";
    } else if (/^\s*$/.test(credentials.email)) {
      newErrors.email = "Email cannot be just white spaces";
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!credentials.password || credentials.password.length === 0) {
      newErrors.password = "Password is required";
    } else if (/^\s*$/.test(credentials.password)) {
      newErrors.password = "Password cannot be just white spaces";
    } else if (credentials.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const result = await userRegister(credentials);

      if (result.success && result.id) {
        localStorage.setItem("userId", result.id as string);

        closeModal();
        dispatch(
          showToast({
            toastType: "Success",
            message: "User registered successfully",
          })
        );
      } else {
        dispatch(
          showToast({
            toastType: "Error",
            message: result.message || "Registration failed",
          })
        );
      }
    } catch (error) {
      dispatch(
        showToast({
          toastType: "Error",
          message: "An unexpected error occurred",
        })
      );
    }
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
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
              className={`block w-full pl-10 pr-3 py-2 border ${
                errors.username ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={credentials.username}
              onChange={handleChange}
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative mt-1">
            <FaUser className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400" />
            <input
              type="email"
              name="email"
              className={`block w-full pl-10 pr-3 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={credentials.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
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
              className={`block w-full pl-10 pr-3 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={credentials.password}
              onChange={handleChange}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </Modal>
  );
};

export default Register;
