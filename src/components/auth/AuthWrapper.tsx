"use client";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";

const AuthWrapper = () => {
  const [verify, SetVerify] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    const username = localStorage.getItem("usename");

    if (authToken && username) {
      const decoded = jwtDecode(authToken);
      console.log(decoded?.user);
      if (username == (decoded?.user as string)) {
        SetVerify(true);
      }
    }
    console.log(authToken);
  }, []);

  return <div>AuthWrapper</div>;
};

export default AuthWrapper;
