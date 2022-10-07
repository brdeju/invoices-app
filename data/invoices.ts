import { PaymentMethod } from "../helpers/enums";
import { InvoiceForm } from "../types";
import { EPAM, ITDEV } from "./companies";
import { EPAM_EXTRA, EPAM_WORKTIME_DEFAULT } from "./items";

export const EPAM_DEFAULT_TEMPLATE: InvoiceForm = {
  invoiceNo: "",
  invoiceDate: "",
  deliveryDate: "",
  paymentDue: "",
  paymentMethod: PaymentMethod.TRANSFER,
  seller: ITDEV,
  buyer: EPAM,
  items: [EPAM_WORKTIME_DEFAULT, EPAM_EXTRA],
};
