import React, { useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FieldArray } from "formik";
import type { InvoiceFormProps } from "../../types";
import DatePicker from "../DatePicker";
import {
  getInvoiceNo,
  getDeliveryDate,
  getPaymentDue,
} from "../../helpers/invoice";
import InvoiceItem from "./InvoiceItem";

const InvoiceForm = ({
  handleBlur,
  handleChange,
  handleSubmit,
  values,
}: InvoiceFormProps) => {
  useEffect(() => {
    if (!values.invoiceDate) return;
    handleChange("deliveryDate")(getDeliveryDate(values.invoiceDate));
  }, [values.invoiceDate]);

  useEffect(() => {
    if (!values.deliveryDate) return;
    handleChange("invoiceNo")(getInvoiceNo(values.deliveryDate));
    handleChange("paymentDue")(getPaymentDue(values.deliveryDate));
  }, [values.deliveryDate]);

  return (
    <View style={styles.view}>
      <label style={styles.label}>
        <Text style={styles.text}>Invoice No.</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange("invoiceNo")}
          onBlur={handleBlur("invoiceNo")}
          value={values.invoiceNo}
        />
      </label>
      <label style={styles.label}>
        <Text style={styles.text}>Invoice Date</Text>
        <DatePicker
          handleBlur={handleBlur}
          handleChange={handleChange}
          styles={styles.input}
          value={values.invoiceDate}
          field="invoiceDate"
        />
      </label>
      <label style={styles.label}>
        <Text style={styles.text}>Delivery Date</Text>
        <DatePicker
          handleBlur={handleBlur}
          handleChange={handleChange}
          styles={styles.input}
          value={values.deliveryDate}
          field="deliveryDate"
        />
      </label>
      <label style={styles.label}>
        <Text style={styles.text}>Payment Due Date</Text>
        <DatePicker
          handleBlur={handleBlur}
          handleChange={handleChange}
          styles={styles.input}
          value={values.paymentDue}
          field="paymentDue"
        />
      </label>
      <label style={styles.label}>
        <Text style={styles.text}>Payment Method</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChange("paymentMethod")}
          onBlur={handleBlur("paymentMethod")}
          value={values.paymentMethod}
          editable={false}
        />
      </label>
      {/* <Text style={styles.text}>Account No.</Text>
      <Text style={styles.text}>Seller</Text>
      <Text style={styles.text}>Bill To</Text> */}
      <FieldArray
        name="items"
        render={(arrayHelpers) => (
          <View>
            {values.items?.map?.((item, index) => (
              <InvoiceItem
                index={index}
                item={item}
                arrayHelpers={arrayHelpers}
                key={index}
              />
            ))}

            <Pressable onPress={arrayHelpers.handlePush({})}>
              <Text style={styles.add}>Add Item<FontAwesome name="plus-circle" size={32} color="blue" style={styles.addIcon} /></Text>
            </Pressable>
          </View>
        )}
      />

      <Pressable style={styles.submit} onPress={() => handleSubmit()}>
        <Text style={styles.submitText}>Print</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 400,
    margin: "auto",
    alignItems: "center",
  },
  label: {
    display: "flex",
    alignItems: "center",
    margin: 10,
  },
  text: {
    textAlign: "right",
    width: 160,
    marginRight: 16,
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    boxSizing: "border-box",
    backgroundColor: "white",
  },
  add: {
    display: 'flex',
    alignItems: 'center',
  },
  addIcon: {
    marginLeft: 8,
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "blue",
    width: 200,
    marginHorizontal: 20,
  },
  submitText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default InvoiceForm;
