import React from "react";
import { getInvoices } from "./../data/data";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Invoices = () => {
  const invoices = getInvoices();
  return (
    <div>
      <h1>Your invoices</h1>
      <nav className="invoices-container">
        {invoices.map((invoice) => (
          <Link to={`${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
