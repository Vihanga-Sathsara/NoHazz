import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./components/NewLandingPage";
import AboutPage from "./components/AboutPage";
import ServicesPage from "./components/ServicesPage";
import NewsEventsPage from "./components/News&EventPage";
import ProductsPage from "./components/ProductsPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("loaded");

    if (alreadyLoaded) {
      setLoading(false);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("loaded", "true");
    setLoading(false);
  };

  return (
    <BrowserRouter>
      {loading && <LoadingScreen onFinish={handleFinish} />}

      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/news-events" element={<NewsEventsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;