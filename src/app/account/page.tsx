"use client"

import { getUserProfile } from '@/api/auth/user';
import { User } from '@/types';
import React, { useEffect, useState } from 'react'

const page = () => {

  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchLoginUser();
  }, []);
  const fetchLoginUser = async () => {
    try {
      const userResponse = await getUserProfile(
      1 as number
      );
      if (userResponse.success && userResponse.data) {
        setUser(userResponse.data);
      } else {
        setError(
          userResponse.message ||
            `An error occurred while fetching User.`
        );
      }
    } catch (err) {
      setError(
        (err as Error)?.message ||
          "An error occurred while fetching categories and products."
      );
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loader component or message
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Error message with some styling
  }
  return (
    <div className="flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
        <div className="space-y-4">
            <div>
                <p className="text-gray-600">Name:</p>
                <p className="text-xl font-semibold">{user?.name.firstname} {user?.name.lastname}</p>
            </div>
            <div>
                <p className="text-gray-600">Username:</p>
                <p className="text-xl font-semibold">{user?.username}</p>
            </div>
            <div>
                <p className="text-gray-600">Email:</p>
                <p className="text-xl font-semibold">{user?.email}</p>
            </div>
            <div>
                <p className="text-gray-600">Phone:</p>
                <p className="text-xl font-semibold">{user?.phone}</p>
            </div>
            <div>
                <p className="text-gray-600">Address:</p>
                <p className="text-xl font-semibold">{user?.address.number} {user?.address.street}, {user?.address.city}, {user?.address.zipcode}</p>
            </div>
            <div>
                <p className="text-gray-600">Geolocation:</p>
                <p className="text-xl font-semibold">Lat: {user?.address.geolocation.lat}, Long: {user?.address.geolocation.long}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default page