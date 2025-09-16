import { Routes, Route } from "react-router";
import LandingPage from "../views/landing";
import RootLayout from "@/components/layouts/root-layout";
import CarDetailsPage from "@/views/car-details";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="" element={<LandingPage />} />
        {/* <Route path="/car/:id" element={<CarDetailsPage />} /> */}
      </Route>
    </Routes>
  );
};