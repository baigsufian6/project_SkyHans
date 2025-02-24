import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Expertise from "./components/Expertise";
import ProductPage from "./components/ProductPage";
import Contact from './components/ContactPage'
import Team from './components/TeamMembersPage'
import Footer from './components/Footer'
import Testamonial from './components/Testamonial'
import Logoslide from './components/LogoSlider'
import "./App.css";


// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <Logoslide />
              <Testamonial />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/team' element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
