import { Routes, Route } from "react-router";
import LandingPage from "../views/landing";
import RootLayout from "@/components/layouts/root-layout";
import CarDetailsPage from "@/views/car-details";
import CarListingsPage from "@/views/car-listing";
import AboutPage from "@/views/about-us";
import ServicesPage from "@/views/services";
import ContactPage from "@/views/contact";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/cars" element={<CarListingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/car/:id" element={<CarDetailsPage />} />
      </Route>
    </Routes>
  );
};