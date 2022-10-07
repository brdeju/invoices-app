import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AddressDetails from "./addressDetails";
import type { Buyer } from "../../types";

const BuyerDetails = ({ buyer }: { buyer: Buyer }) => {
  return (
    <View style={styles.view}>
      <View>
        <Text style={styles.bold}>Nabywca</Text>
        <Text> / Bill to</Text>
      </View>

      <Text>{buyer.name}</Text>
      <AddressDetails address={buyer.address} />
      <Text>NIP: {buyer.id}</Text>
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

export default BuyerDetails;
