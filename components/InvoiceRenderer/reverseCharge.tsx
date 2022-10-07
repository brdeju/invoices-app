import React from "react";
import { StyleSheet, View } from "react-native";

const ReverseCharge = () => {
  // TODO: implement support for other currencies
  const exchangeRate = null;
  if (!exchangeRate) return null;
  return (
    <View style={styles.exchange}>
      <p>Odwrotne obciążenie / Reverse charge</p>
      <p>1 EUR = {(exchangeRate as any).value} PLN</p>
      <p>Kurs z dnia: {(exchangeRate as any).date}</p>
      <p>Numer tabeli: {(exchangeRate as any).id}</p>
    </View>
  );
};

const styles = StyleSheet.create({
  exchange: {},
});

export default ReverseCharge;
