import React from "react";
import { StyleSheet, Text } from "react-native";
import type { InvoiceForm } from "../../types";

const Details = ({ invoice }: { invoice: InvoiceForm }) => {
  return (
    <table className="sell-data half-width">
      <thead>
        <tr>
          <th colSpan={4}>
            <Text>Faktura nr / Invoice No.:</Text>
            <Text>{invoice.invoiceNo}</Text>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="row-label">
            <Text>Data wystawienia</Text>
            <Text>Invoice Date:</Text>
          </td>
          <td><Text>{invoice.invoiceDate}</Text></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="row-label">
            <Text>Data sprzedaży</Text>
            <Text>Delivery Date:</Text>
          </td>
          <td><Text>{invoice.deliveryDate}</Text></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="row-label">
            <Text>Termin płatności</Text>
            <Text>Payment Due By:</Text>
          </td>
          <td><Text>{invoice.paymentDue}</Text></td>
          <td className="row-label">
            <Text>Metoda płatności</Text>
            <Text>Payment Method:</Text>
          </td>
          <td><Text>{invoice.paymentMethod}</Text></td>
        </tr>
      </tbody>
    </table>
  );
};

const styles = StyleSheet.create({});

export default Details;
