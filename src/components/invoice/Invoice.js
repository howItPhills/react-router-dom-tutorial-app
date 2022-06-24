import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../../data/data";

const Invoice = () => {
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
    </div>
  );
};

export default Invoice;
