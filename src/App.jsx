import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TracksPage from './pages/TracksPage';
import ImportantDatesPage from './pages/ImportantDatesPage';
import RegistrationPage from './pages/RegistrationPage';
import CommitteePage from './pages/CommitteePage';
import SubmissionGuidelinesPage from './pages/SubmissionGuidelinesPage';
import CameraReadyPage from './pages/CameraReadyPage';
import ContactPage from './pages/ContactPage';
import TravelVisaPage from './pages/TravelVisaPage';
import VenueDirectionsPage from './pages/VenueDirectionsPage';
import ExploreGwaliorPage from './pages/ExploreGwaliorPage';
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
          <Route path={ROUTES.GUIDELINES} element={<SubmissionGuidelinesPage />} />
          <Route path={ROUTES.CAMERA_READY} element={<CameraReadyPage />} />
          <Route path={ROUTES.IMPORTANT_DATES} element={<ImportantDatesPage />} />
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

