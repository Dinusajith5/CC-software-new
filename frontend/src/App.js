import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-are-we" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Who Are We - Coming Soon</h1></div>} />
          <Route path="/our-team" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Our Team - Coming Soon</h1></div>} />
          <Route path="/projects" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Projects - Coming Soon</h1></div>} />
          <Route path="/service" element={<div className="pt-20 min-h-screen flex items-center justify-center"><h1 className="text-2xl">Service - Coming Soon</h1></div>} />
          <Route path="/get-in-touch" element={<ContactPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;