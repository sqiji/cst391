import React, { useState } from "react";
import Login from "./Login";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "./ContactUs";
import NavBar from "./NavBar";
import User from "./User";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (from, navigate) => {
    setIsLoggedIn(true);
    console.log("in handleLogin from: ", from);
    console.log("in handleLogin navigate: ", navigate);
    navigate(from, { replace: true });
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<RootElement />} />
          <Route
            path="/about"
            element={
              <PrivateRoute authorized={isLoggedIn}>
                <AboutUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute authorized={isLoggedIn}>
                <ContactUs />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login onClick={handleLogin} />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
        <h5>Some friends of mine</h5>
        <ul>
            <li>
                <Link to='user/Mary'>Mary</Link>
            </li>
            <li>
                <Link to='user/Justine'>Justine</Link>
            </li>
            <li>
                <Link to='user/Brianna'>Brianna</Link>
            </li>
            <li>
                <Link to='user/David'>David</Link>
            </li>
        </ul>
      </BrowserRouter>
    </>
  );
};

const RootElement = () => <span></span>;

export default App;
