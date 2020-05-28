import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar/navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Content";
import Portofolio from "./Pages/Portofolio/Header";

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Home />
        <div className="mt-5 pt-5">
          <Portofolio />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
