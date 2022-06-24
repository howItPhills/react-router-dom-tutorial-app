import React from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./app.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
