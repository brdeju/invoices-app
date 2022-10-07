import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Address from "./addressDetails";
import type { Seller } from "../../types";

const SellerDetails = ({ seller }: { seller: Seller }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.header}>
        <Text style={styles.bold}>Sprzedawca</Text> / Seller
      </Text>

      <Text>{seller.name}</Text>
      <Address address={seller.address} />
      <Text>NIP: {seller.id}</Text>

      <Text>{seller.bank.name}</Text>
      <Text>IBAN {seller.bank.number}</Text>
      <Text>SWIFT {seller.bank.swift}</Text>
      <Address address={seller.bank.address} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  header: {
    lineHeight: 25,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default SellerDetails;
