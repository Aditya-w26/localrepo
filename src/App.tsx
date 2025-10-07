import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TimingsPage from './pages/TimingsPage';
import EventsPage from './pages/EventsPage';
import LiveDarshanPage from './pages/LiveDarshanPage';
import DonationPage from './pages/DonationPage';
import GalleryPage from './pages/GalleryPage';
import PujaBookingPage from './pages/PujaBookingPage';
import ContactPage from './pages/ContactPage';
import PrayerWallPage from './pages/PrayerWallPage';
import BhajanPage from './pages/BhajanPage';
import VolunteerPage from './pages/VolunteerPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/timings" element={<TimingsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/live-darshan" element={<LiveDarshanPage />} />
              <Route path="/donation" element={<DonationPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/puja-booking" element={<PujaBookingPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/prayer-wall" element={<PrayerWallPage />} />
              <Route path="/bhajan" element={<BhajanPage />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;