import React, { useEffect } from "react";
import { InvoiceRendererProps } from "../../types";

const InvoiceRenderer = ({ invoice }: InvoiceRendererProps) => {
  useEffect(() => {
    // process invoice
    console.log("invoice", invoice);
  }, [invoice]);

  return <div>InvoiceRenderer</div>;
};

export default InvoiceRenderer;
