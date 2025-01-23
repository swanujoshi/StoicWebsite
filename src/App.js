import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Views from "./component/Views";
import Pioneers from "./component/Pioneers";
import BusinessServices from "./component/BusinessServices";
import Team from "./component/Team";
import TeamPage from "./component/Teampage";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import ContactPage from "./component/Contactpage";
import ServicePage from "./component/ServicePage";
import Technology from "./component/Technology";
import Footer from "./component/Footer";
import About from "./component/About";
import ClientLogin from "./component/ClientLogin";
import EmployeeLogin from "./component/EmployeeLogin";
import Register from "./component/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Main Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Views />
                <Pioneers />
                <BusinessServices />
                <Team />
                <Testimonials />
                <Contact />
              </>
            }
          />
          {/* Other Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/Services" element={<ServicePage />} />

          {/* Login Routes */}
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/employee-login" element={<EmployeeLogin />} />
          <Route path="/employee-Register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
