import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { EPAM_DEFAULT_TEMPLATE } from "../../data/invoices";
import { calculateTotal } from "../../helpers/invoice";
import { InvoiceRendererProps } from "../../types";
import Buyer from "./buyerDetails";
import Details from "./details";
import ItemsTable from "./itemsTable";
import ReverseCharge from "./reverseCharge";
import Seller from "./sellerDetails";
import Signatures from "./signatures";
import Summaries from "./summaries";
import TaxSummary from "./taxSummary";

// TODO: support other currencies
// TODO: support multiple tax rates

const InvoiceRenderer = ({
  invoice = EPAM_DEFAULT_TEMPLATE,
}: InvoiceRendererProps) => {
  const totalPrice = useMemo(
    () => calculateTotal(invoice.items),
    [invoice.items]
  );

  return (
    <View style={styles.invoice}>
      <Details invoice={invoice} />

      {/* <View style={styles.contractors}>
        <Seller seller={invoice.seller} />
        <Buyer buyer={invoice.buyer} />
      </View>

      <ItemsTable items={invoice.items} />

      <View style={styles.summary}>
        <TaxSummary total={totalPrice} />
        <Summaries total={totalPrice} />
      </View>

      <ReverseCharge />

      <Signatures /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  invoice: {
    width: 210,
    height: 297,
    backgroundColor: "white",
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  contractors: {
    display: "flex",
    fontSize: "0.9em",
    paddingBottom: "5px",
    borderBottom: "2px solid rgb(147, 147, 147)",
    marginBottom: 8,
  },
  summary: {},
});

export default InvoiceRenderer;
