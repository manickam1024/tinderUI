import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <cdiv className="flex flex-col ">
      {" "}
      <StrictMode>
        <Navbar />
        <Outlet />
        <Footer />
      </StrictMode>
    </cdiv>
  );
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

createRoot(document.getElementById("root")).render(<Router />);
