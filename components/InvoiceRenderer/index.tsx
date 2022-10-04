import React, { useEffect } from "react";
import { Text } from 'react-native';
import { InvoiceRendererProps } from "../../types";

const InvoiceRenderer = ({ invoice }: InvoiceRendererProps) => {
  useEffect(() => {
    // process invoice
    console.log("invoice", invoice);
  }, [invoice]);

  return <Text>InvoiceRenderer</Text>;
};

export default InvoiceRenderer;
