import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SalesAgency from './pages/SalesAgency';
import Consulting from './pages/Consulting';
import MASupport from './pages/MASupport';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Recruitment from './pages/Recruitment';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sales-agency" element={<SalesAgency />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/ma-support" element={<MASupport />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/recruitment" element={<Recruitment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;