import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);

    if (message === null) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
            })
              .then(() => {
                const { uid, email, displayName } = auth.currentUser;
                dispatch(
                  addUser({ uid: uid, email: email, displayName: displayName })
                );
                navigate("/browse");
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="relative">
      <div className="absolute z-0">
        <img
          className="w-full object-cover"
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_large.jpg"
        />
      </div>
      <div>
        <Header />
        <form
          className="w-3/12 text-white absolute bg-black/80 my-36 mx-auto right-0 left-0 p-12 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-3xl font-bold my-1">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="p-2 my-3 w-full bg-gray-700 rounded"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="p-2 my-3 w-full bg-gray-700 rounded"
            type="email"
            placeholder="Email Address"
          />
          <input
            ref={password}
            className="p-2 my-3 w-full  bg-gray-700 rounded"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-800 text-sm">{errorMessage}</p>
          <button
            className="p-3 my-3 w-full bg-red-800 rounded"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="cursor-pointer text-sm" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Already registered? Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
