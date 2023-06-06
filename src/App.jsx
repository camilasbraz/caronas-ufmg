import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import React from "react";

import { AuthProvider, useAuth } from "./utils/AuthProvider";

import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import FindRide from "./Pages/FindRide/FindRide";
import OfferRide from "./Pages/OfferRide/OfferRide";
import RideInfo from "./Pages/RideInfo/RideInfo";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route
              path="home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="buscar"
              element={
                <ProtectedRoute>
                  <FindRide />
                </ProtectedRoute>
              }
            />
            <Route
              path="oferecer"
              element={
                <ProtectedRoute>
                  <OfferRide />
                </ProtectedRoute>
              }
            />
            <Route
              path="informacoes/:id"
              element={
                <ProtectedRoute>
                  <RideInfo />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
