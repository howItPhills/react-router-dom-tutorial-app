import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Routes, Route } from "react-router-dom";
import Default from "./components/Default";
import Invoices from "./components/Invoices";
import Expenses from "./components/Expenses";

import "./index.css";
import Invoice from "./components/invoice/Invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route index element={<Default />} />
        <Route path="*" element={<div>There is nothing in here</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
