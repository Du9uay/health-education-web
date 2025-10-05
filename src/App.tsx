import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import LiquidGlassBackground from './components/LiquidGlassBackground';

import HomePage from './pages/HomePage';
import HealthStatusPage from './pages/course/HealthStatusPage';
import HealthDimensionsPage from './pages/course/HealthDimensionsPage';
import HealthAssessmentPage from './pages/course/HealthAssessmentPage';
import ManagementProcessPage from './pages/course/ManagementProcessPage';
import CourseTestPage from './pages/CourseTestPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen relative">
        <LiquidGlassBackground />

        <Navigation />
        <div className="container mx-auto px-4 pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/health-status" element={<HealthStatusPage />} />
            <Route path="/course/health-dimensions" element={<HealthDimensionsPage />} />
            <Route path="/course/health-assessment" element={<HealthAssessmentPage />} />
            <Route path="/course/management-process" element={<ManagementProcessPage />} />
            <Route path="/course-test" element={<CourseTestPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App; 