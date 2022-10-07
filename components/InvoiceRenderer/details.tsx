import React from "react";
import { StyleSheet, Text } from "react-native";
import { Table, TableWrapper, Cell, Row, Rows, Col, Cols } from 'react-native-table-component';
import type { InvoiceForm } from "../../types";

const Details = ({ invoice }: { invoice: InvoiceForm }) => {
  return (
    <Table borderStyle={{ borderWidth: 1, borderColor: '#cccccc' }}>
      <Row data={[
        `Faktura nr / Invoice No.: ${invoice.invoiceNo}`
      ]} flexArr={[4]} />
      <Rows data={[
        [
          'Data wystawienia / Invoice Date:', invoice.invoiceDate, '', ''
        ],
        [
          'Data sprzedaży / Delivery Date:', invoice.deliveryDate, '', ''
        ],
        [
          'Termin płatności / Payment Due By:', invoice.paymentDue, 'Metoda płatności / Payment Method:', invoice.paymentMethod
        ],
      ]} />
    </Table>
  );
};

const styles = StyleSheet.create({});

export default Details;
