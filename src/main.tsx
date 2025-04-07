import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import BannerSection from "./components/BannerSection/BannerSection";
import SixHourDeals from "./components/SixHoursDeals";
import DailySuggestion from "./components/DailySuggestion";
import ComboBoxSection from "./components/ComboBox/ComboBoxSection";
import "./index.css";

import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <BannerSection />
    <SixHourDeals />
    <DailySuggestion />
    <ComboBoxSection />
  </StrictMode>
);
