import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Login from "./components/login.jsx";
import Feed from "./components/Feed.jsx";
import Connections from "./components/Connections.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { adduserdata } from "./redux/slice.js";
import { BASE_URL } from "./constants/Urls.js";
// App layout
const App = () => {
  const dispatch = useDispatch();
  // whenever i referesh the page the store is also refreshed and navbar is empty soo i added this
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(BASE_URL + "/profile/getprofile", {
          withCredentials: true,
        });
        const data = response.data;
        if (data) {
          dispatch(adduserdata(data));
        } else {
          console.log("Could not add userdata from Feed component");
        }
      } catch (err) {
        console.log("Something went wrong while fetching user profile:", err);
      }
    };

    fetchProfile();
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Router setup with nested routes
const Router = () => {
  return (
    //i added the router provider not in App because im using the dispatch or accessing the store outside the provider
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* index route for default page */}
            <Route path="/" element={<Login />} />
            {/* other pages */}
            <Route path="/feed" element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            {/* unknown routes */}
            <Route path="*" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

// Root render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
