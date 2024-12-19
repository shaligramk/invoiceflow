import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoicePage from './pages/InvoicePage';
import HelpPage from './pages/HelpPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/help" element={<HelpPage />} />
        <Route path="/" element={<InvoicePage />} />
      </Routes>
    </Router>
  );
}