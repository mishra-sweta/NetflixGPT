import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { SIGNUP_BACKGROUND, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null); // ✅ fixed this
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current?.value
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
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(addUser({ uid, email, displayName, photoURL }));
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });
          })
          .catch((error) => {
            setErrorMessage(error.code + " - " + error.message);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            // Optional: dispatch or navigate
          })
          .catch((error) => {
            setErrorMessage(error.code + " - " + error.message);
          });
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="min-h-screen overflow-y-hidden relative">
      {/* Background */}
      <img
        className="w-full h-screen object-cover absolute top-0 left-0 -z-10"
        alt="background"
        src={SIGNUP_BACKGROUND}
      />

      {/* Header */}
      <Header />

      {/* Form */}
      <form
        className="w-11/12 md:w-3/12 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 p-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
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
          className="p-2 my-3 w-full bg-gray-700 rounded"
          type="password"
          placeholder="Password"
        />

        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <button
          className="p-3 my-3 w-full bg-red-800 hover:bg-red-700 rounded"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer text-sm hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
