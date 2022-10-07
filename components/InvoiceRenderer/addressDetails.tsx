import React from "react";
import { View, Text } from "react-native";
import type { Address } from "../../types";

const AddressDetails = ({ address }: { address: Address }) => {
  return (
    <View>
      <Text>{address.street} {address.number}</Text>
      <Text>{address.zip} {address.city}</Text>
      <Text>{address.country}</Text>
    </View>
  );
};

export default AddressDetails;
