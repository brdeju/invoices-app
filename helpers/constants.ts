import { PaymentMethod } from "./enums";

export const invoiceInitialValues = {
  invoiceNo: "",
  invoiceDate: "",
  deliveryDate: "",
  paymentDue: "",
  paymentMethod: PaymentMethod.TRANSFER,
  seller: {
    name: "",
    address: {
      street: "",
      number: "",
      code: "",
      city: "",
      country: "",
    },
    id: "",
    bank: {
      name: "",
      address: {
        street: "",
        number: "",
        code: "",
        city: "",
        country: "",
      },
      swift: "",
      number: "",
    },
  },
  buyer: {
    name: "",
    address: {
      street: "",
      number: "",
      code: "",
      city: "",
      country: "",
    },
    id: "",
  },
  items: [],
};