import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Formik } from "formik";
import InvoiceForm from "../components/InvoiceForm";
import { RootTabScreenProps, InvoiceForm as InvoiceFormType } from "../types";
import { invoiceInitialValues } from "../helpers/constants";

export default function InvoiceScreen({
  navigation,
}: RootTabScreenProps<"Invoice">) {
  const handleInvoiceCreate = (invoice: InvoiceFormType) => {
    navigation.navigate("Modal", { invoice });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Formik
          initialValues={invoiceInitialValues}
          onSubmit={handleInvoiceCreate}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <InvoiceForm
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
              values={values}
            />
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
