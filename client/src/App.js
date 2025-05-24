import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavMenu from "./component/NavMenu/NavMenu";
import LandingPage from "./component/LandingPage/LandingPage";
import CodingPage from "./component/CodingPage/CodingPage";
import ComicsPage from "./component/ComicsPage/ComicsPage";
import ContactPage from "./component/ContactPage/ContactPage";
import Footer from "./component/Footer/Footer";


const App = () => {
  return (
    <Router> 
      <NavMenu />
      <Routes> 
        <Route path="/" element={<LandingPage/>} />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/comics" element={<ComicsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;



