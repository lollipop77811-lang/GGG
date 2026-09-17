import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import EmailFloat from "./components/EmailFloat";
import AIChatbot from "./components/AIChatbot";
import FloatingAction from "./components/FloatingAction";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CountriesPage from "./pages/CountriesPage";
import JobsPage from "./pages/JobsPage";
import ProcessPage from "./pages/ProcessPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <ScrollToTop />
      <Header />
      <main className="w-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="mt-auto w-full">
        <Footer />
      </footer>

      {/* Global Floating Action Widgets System:
          - Desktop view: 2 floating widgets (Email on bottom-left, AI Chatbot on bottom-right)
          - Mobile view: 4 floating widgets (Call & Email on left, WhatsApp & Chatbot on right)
      */}
      <EmailFloat />
      <AIChatbot />
      <FloatingAction />
    </div>
  );
}
