import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TracksPage from './pages/TracksPage';
import RegistrationPage from './pages/RegistrationPage';
import CommitteePage from './pages/CommitteePage';
import ContactPage from './pages/ContactPage';
import TravelVisaPage from './pages/TravelVisaPage';
import VenueDirectionsPage from './pages/VenueDirectionsPage';
import ExploreGwaliorPage from './pages/ExploreGwaliorPage';
import PaperSubmissionPage from './pages/PaperSubmissionPage';
import { ROUTES } from './constants/routes';

import ScrollToTop from './components/layout/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.TRACKS} element={<TracksPage />} />
          <Route path={ROUTES.PAPER_SUBMISSION} element={<PaperSubmissionPage />} />
          {/* Backward compatibility: old call-for-papers URLs */}
          <Route path="/call-for-papers/guidelines" element={<Navigate to={ROUTES.PAPER_SUBMISSION} replace />} />
          <Route path="/call-for-papers/camera-ready" element={<Navigate to={ROUTES.PAPER_SUBMISSION} replace />} />
          {/* Backward compatibility: old paper-submission URL */}
          <Route path="/paper-submission" element={<Navigate to={ROUTES.PAPER_SUBMISSION} replace />} />
          <Route path={ROUTES.IMPORTANT_DATES} element={<Navigate to={ROUTES.TRACKS} replace />} />
          <Route path={ROUTES.REGISTRATION} element={<RegistrationPage />} />
          <Route path={ROUTES.TRAVEL_VISA} element={<TravelVisaPage />} />
          <Route path={ROUTES.TRAVEL_VENUE} element={<VenueDirectionsPage />} />
          <Route path={ROUTES.TRAVEL_EXPLORE} element={<ExploreGwaliorPage />} />
          <Route path={ROUTES.COMMITTEE} element={<CommitteePage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

