/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleProp, TextStyle } from "react-native";
import { FieldArrayRenderProps } from 'formik';
import { PaymentMethod, Unit } from "./helpers/enums";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: { invoice: InvoiceForm };
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Invoice: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type Address = {
  street: string;
  number: string;
  code: string;
  city: string;
  country: string;
}
export type Bank = {
  name: string;
  address: Address;
  swift: string;
  number: string;
}
export type Seller = {
  name: string;
  address: Address;
  id: string;
  bank: Bank;
};
export type Buyer = {
  name: string;
  address: Address;
  id: string;
}
export type Item = {
  description: string;
  unit: Unit;
  quantity: string;
  price: string;
  tax: string;
  currency?: string;
}
export type InvoiceForm = {
  invoiceNo: string;
  invoiceDate: string;
  deliveryDate: string;
  paymentDue: string;
  paymentMethod: PaymentMethod;
  seller: Seller;
  buyer: Buyer;
  items: Item[];
};

export type InvoiceFormProps = {
  handleBlur: Function;
  handleChange: Function;
  handleSubmit: Function;
  values: InvoiceForm;
};

export type InvoiceItemProps = {
  index: number;
  item: Item;
  arrayHelpers: FieldArrayRenderProps;
}

export type InvoiceRendererProps = {
  invoice: InvoiceForm;
};

export type DatePickerProps = {
  styles: StyleProp<TextStyle>;
  handleBlur: Function;
  handleChange: Function;
  value: string;
  field: string;
};


