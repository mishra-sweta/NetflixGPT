import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_large.jpg" />
      </div>

      <form className="w-3/12 text-white absolute bg-black/80 my-36 mx-auto right-0 left-0 p-12 rounded-lg">
        <h1 className="text-3xl font-bold my-1">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-2 my-3 w-full bg-gray-700 rounded"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-2 my-3 w-full bg-gray-700 rounded"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="p-2 my-3 w-full  bg-gray-700 rounded"
          type="password"
          placeholder="Password"
        />
        <button className="p-3 my-3 w-full bg-red-800 rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer text-sm" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
