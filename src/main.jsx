import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "aos/dist/aos.css";
import 'swiper/css';
import "swiper/swiper-bundle.css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);