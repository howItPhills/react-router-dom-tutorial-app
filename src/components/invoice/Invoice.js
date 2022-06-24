import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getInvoice } from "../../data/data";
import { deleteInvoice } from "./../../data/data";

const Invoice = () => {
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId));
  return (
    <div className="invoice-container">
      <p>
        <b>Name: </b>
        {invoice.name}
      </p>
      <p>
        <b>Number: </b>
        {invoice.number}
      </p>
      <p>
        <b>Amount: </b>
        {invoice.amount}
      </p>
      <p>
        <b>Due: </b>
        {invoice.due}
      </p>
      <button
        style={{
          marginBottom: "10px",
        }}
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices");
        }}
      >
        Delete invoice
      </button>
    </div>
  );
};

export default Invoice;
