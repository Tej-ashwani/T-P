import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TopRecruiters from './components/TopRecruiters';
import StudentRegistration from './components/StudentRegistration';
import RecruiterRegistration from './components/RecruiterRegistration';
import CoordinatorLogin from './components/CoordinatorLogin';
import VerifierLogin from './components/VerifierLogin';
import Resources from './components/Resources';
import Placements from './components/Placements';
import Alumni from './components/Alumni';
import WhyRecruit from './components/WhyRecruit';
import Opportunities from './components/Opportunities';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <TopRecruiters />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student-registration" element={<StudentRegistration />} />
          <Route path="/recruiter-registration" element={<RecruiterRegistration />} />
          <Route path="/coordinator-login" element={<CoordinatorLogin />} />
          <Route path="/verifier-login" element={<VerifierLogin />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/why-recruit" element={<WhyRecruit />} />
          <Route path="/opportunities" element={<Opportunities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
