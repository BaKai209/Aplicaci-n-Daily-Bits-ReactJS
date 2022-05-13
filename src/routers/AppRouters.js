import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/NavBar";
import LoginPage from "../pages/LoginPage";
import IndexPage from '../pages/IndexPage';
import StatisticsPage from '../pages/StatisticsPage';
import Questions from '../components/Questions'
import Questions1 from '../components/Questions1'
import Questions2 from '../components/Questions2'
import AdmonPage from "../pages/AdmonPage";

export default class AppRouters extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/statistics" element={<StatisticsPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/questionHTML" element={<Questions />} />
            <Route exact path="/questionCSS" element={<Questions1 />} />
            <Route exact path="/questionJS" element={<Questions2 />} />
            <Route exact path="/Admon" element={<AdmonPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
