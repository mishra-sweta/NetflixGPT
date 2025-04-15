import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
    } else {
      dispatch(removeUser());
    }
  });

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
