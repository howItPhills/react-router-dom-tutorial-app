import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Go to main page</Link>
      <nav
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  );
};

export default Navbar;
