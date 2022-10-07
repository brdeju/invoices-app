import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Signatures = () => {
  return (
    <View style={styles.signatures}>
      <View>
        <Text>Imię i nazwisko osoby uprawnionej</Text>
        <Text>do wystawiania faktury</Text>
        <Text style={styles.italic}>seller's signature</Text>
      </View>

      <View>
        <Text>Imię i nazwisko osoby uprawnionej</Text>
        <Text>do odbioru faktury</Text>
        <Text style={styles.italic}>buyer's signature</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signatures: {},
  italic: {},
});

export default Signatures;
