import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Login from "./components/login.jsx";
import Feed from "./components/Feed.jsx";
import Connections from "./components/Connections.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

// App layout
const App = () => {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* index route for default page */}
          <Route path="/" element={<Login />} />
          {/* other pages */}
          <Route path="feed" element={<Feed />} />
          <Route path="connections" element={<Connections />} />
          {/* unknown routes */}
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

// Root render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
