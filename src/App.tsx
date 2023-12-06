import { Route, Routes, useNavigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { NextUIProvider } from "@nextui-org/react";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { DashboardPage } from "./pages/Dashboard";

export const App = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </NextUIProvider>
  );
};
