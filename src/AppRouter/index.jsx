import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LandingPage from "../Pages";
import Login from "../Pages/login";
import CreateAccount from "../Pages/createAccount";
import DashIndex from "../Pages/Dashboard";
import Dashboard from "../Pages/Dashboard/dashboard";
import Book from "../Pages/Dashboard/book";
import History from "../Pages/Dashboard/history";
import Profile from "../Pages/Dashboard/profile";
import DoctorDashIndex from "../Pages/Doctor";
import DoctorDashboard from "../Pages/Doctor/dashboard";
import DoctorHistory from "../Pages/Doctor/history";
import DoctorProfile from "../Pages/Doctor/profile";
import DoctorSearch from "../Pages/Doctor/search";

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
          <Route path='book-appointment' element={<Book />} />
          <Route path='appointment-history' element={<History />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/doctor-dashboard' element={<DoctorDashIndex />}>
          <Route index element={<DoctorDashboard />} />
          <Route path='search' element={<DoctorSearch />} />
          <Route path='appointment-history' element={<DoctorHistory />} />
          <Route path='profile' element={<DoctorProfile />} />
        </Route>

        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
