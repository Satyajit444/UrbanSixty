"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { show, hide, toggle } from "@/provider/redux/others/toggleVisibility";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";

const MyComponent = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: any) => state.visibility);

  const handleShow = (id: string) => {
    dispatch(show(id));
  };

  const handleHide = (id: string) => {
    dispatch(hide(id));
  };

  const handleToggle = (id: string) => {
    dispatch(toggle(id));
  };

  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  console.log("🚀 ~ MyComponent ~ isRegisterOpen:", isRegisterOpen)
  console.log("🚀 ~ MyComponent ~ isSignInOpen:", isSignInOpen);

  return (
    <div>
      <div>
        <button onClick={() => handleShow("section1")}>Show</button>
        <button onClick={() => handleHide("section1")}>Hide</button>
        <button onClick={() => handleToggle("section1")}>Toggle</button>
        {isVisible["section1"] && <div>This content is visible</div>}
      </div>
      <div>
        <button onClick={() => handleShow("section2")}>Show</button>
        <button onClick={() => handleHide("section2")}>Hide</button>
        <button onClick={() => handleToggle("section2")}>Toggle</button>
        {isVisible["section2"] && <div>This content is visible one</div>}
      </div>
      <div>
        <button onClick={() => handleShow("section3")}>Show</button>
        <button onClick={() => handleHide("section3")}>Hide</button>
        <button onClick={() => handleToggle("section3")}>Toggle</button>
        {isVisible["section3"] && <div>This content is visible two</div>}
      </div>
      <div>
        <button onClick={() => handleShow("section4")}>Show</button>
        <button onClick={() => handleHide("section4")}>Hide</button>
        <button onClick={() => handleToggle("section4")}>Toggle</button>
        {isVisible["section4"] && <div>This content is visible three</div>}
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <button
          onClick={() => setIsSignInOpen(true)}
          className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign In
        </button>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-4"
        >
          Register
        </button>

        <SignIn
          isOpen={isSignInOpen}
          closeModal={() => setIsSignInOpen(false)}
        />
        <Register
          isOpen={isRegisterOpen}
          closeModal={() => setIsRegisterOpen(false)}
        />
      </div>
    </div>
  );
};

export default MyComponent;
