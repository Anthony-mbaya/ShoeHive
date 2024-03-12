import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Login } from "./Pages/UserDetails/Login";
import { Shop } from "./Pages/Shop";
import { Cart } from "./Pages/Cart";
import Logic from "./Logic/Logic";
import { Navbar } from "./Components/Navbar";
import Signup from "./Pages/UserDetails/Signup";

const App = () => {
  return (
    <div className="app">
      <Logic>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </Logic>
    </div>
  );
};
export default App;
