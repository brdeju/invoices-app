import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ReverseCharge = () => {
  // TODO: implement support for other currencies
  const exchangeRate = null;
  if (!exchangeRate) return null;
  return (
    <View style={styles.exchange}>
      <Text>Odwrotne obciążenie / Reverse charge</Text>
      <Text>1 EUR = {(exchangeRate as any).value} PLN</Text>
      <Text>Kurs z dnia: {(exchangeRate as any).date}</Text>
      <Text>Numer tabeli: {(exchangeRate as any).id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exchange: {},
});

export default ReverseCharge;
