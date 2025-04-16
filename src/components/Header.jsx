import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { showGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(showGptSearch());
  };

  return (
    <div className="w-full bg-gradient-to-t to-black py-2 px-4 flex absolute top-0 left-0 z-20">
      <img className="w-48" src={NETFLIX_LOGO} alt="Netflix Logo" />
      {user && (
        <div className="p-3 ml-auto flex">
          <button
            className="m-2 text-white cursor-pointer bg-purple-700 p-2 rounded"
            onClick={handleGptSearch}
          >
            Gpt Search
          </button>
          <img className="w-12 h-12" src={USER_AVATAR} />
          <button
            className="m-2 font-bold text-white cursor-pointer  to-gray-100"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
