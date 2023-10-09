import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LandingPage from "../Pages";
import Login from "../Pages/login";
import CreateAccount from "../Pages/createAccount";
import DashIndex from "../Pages/Dashboard";
import Dashboard from "../Pages/Dashboard/dashboard";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='create-account' element={<CreateAccount />} />
        </Route>
        <Route path='/dashboard' element={<DashIndex />}>
          <Route index element={<Dashboard />} />
          {/* <Route path='create-account' element={<CreateAccount />} /> */}
        </Route>

        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
