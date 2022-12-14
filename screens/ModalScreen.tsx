import { Platform, StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import InvoiceRenderer from "../components/InvoiceRenderer";
import { RouteProp, useRoute } from "@react-navigation/native";
import { InvoiceForm } from "../types";

export default function ModalScreen() {
  const route =
    useRoute<RouteProp<{ params: { invoice: InvoiceForm } }, "params">>();
  return (
    <SafeAreaView style={styles.container}>
      <InvoiceRenderer invoice={route.params?.invoice} />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
