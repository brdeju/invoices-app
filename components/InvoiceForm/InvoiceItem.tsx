import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Unit } from "../../helpers/enums";
import { InvoiceItemProps } from "../../types";

const InvoiceItem = ({ index, item, arrayHelpers }: InvoiceItemProps) => {
  return (
    <View style={styles.item}>
      <TextInput
        multiline
        style={styles.input}
        onChangeText={arrayHelpers.form.handleChange(
          `items[${index}].description`
        )}
        onBlur={arrayHelpers.form.handleBlur(`items[${index}].description`)}
        placeholder="Description"
        value={item.description || ""}
        numberOfLines={3}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          onChangeText={arrayHelpers.form.handleChange(`items[${index}].unit`)}
          onBlur={arrayHelpers.form.handleBlur(`items[${index}].unit`)}
          placeholder="Unit"
          value={item.unit || Unit.HOUR}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={arrayHelpers.form.handleChange(
            `items[${index}].quantity`
          )}
          onBlur={arrayHelpers.form.handleBlur(`items[${index}].quantity`)}
          placeholder="Quantity"
          value={item.quantity || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={arrayHelpers.form.handleChange(`items[${index}].price`)}
          onBlur={arrayHelpers.form.handleBlur(`items[${index}].price`)}
          placeholder="Price"
          value={item.price || ""}
        />
        <TextInput
          style={styles.input}
          onChangeText={arrayHelpers.form.handleChange(`items[${index}].tax`)}
          onBlur={arrayHelpers.form.handleBlur(`items[${index}].tax`)}
          placeholder="Tax"
          value={item.tax || "23"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginTop: 8,
    marginBottom: 8,
    paddingBottom: 6,
  },
  row: {
    flexDirection: "row",
  },
  input: {
    marginBottom: 8,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    boxSizing: "border-box",
    backgroundColor: "white",
  },
});

export default InvoiceItem;
