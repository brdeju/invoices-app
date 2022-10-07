import { pl as inWordsPl } from "in-words";
import { Item, Totals } from "../types";
import { formatNumber } from "./number";

export const dateToString = (date: Date) => date.toISOString().split("T")[0];

export const getInvoiceNo = (invoiceDate: string, index: number = 1) => {
  const date =
    typeof invoiceDate === "string" ? new Date(invoiceDate) : invoiceDate;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  return `${index}/${month < 10 ? `0${month}` : month}/${year}`;
};

export const getDeliveryDate = (invoiceDate: string) => {
  const date =
    typeof invoiceDate === "string" ? new Date(invoiceDate) : invoiceDate;
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const isJan = month === 0;
  const utcDateTime =
    day < 15
      ? Date.UTC(year - (isJan ? 1 : 0), isJan ? 12 : month, 0)
      : Date.UTC(year, month + 1, 0);
  const endOfMonth = new Date(utcDateTime);
  const weekDay = endOfMonth.getDay();
  if (weekDay > 5) {
    endOfMonth.setDate(endOfMonth.getDate() - (weekDay - 5));
  }
  return endOfMonth.toISOString().split("T")[0];
};

export const getPaymentDue = (invoiceDate: string, dueTerm: number = 14) => {
  const date =
    typeof invoiceDate === "string" ? new Date(invoiceDate) : invoiceDate;
  date.setDate(date.getDate() + dueTerm);
  return date.toISOString().split("T")[0];
};

export const calculateTotal = (items: Item[]): Totals => {
  const total = items.reduce(
    (acc, item) => {
      acc.taxLabel = `${item.tax}%`;
      acc.tax = Number(item.tax);
      acc.netto += Number(item.price) * Number(item.quantity);
      return acc;
    },
    {
      taxLabel: "",
      tax: 0,
      netto: 0,
      vat: 0,
      brutto: 0,
    }
  );
  total.vat = (total.netto * total.tax) / 100;
  total.brutto = total.netto + (total.netto * total.tax) / 100;
  return total;
};

export const getInWord = (value: number, currency: string = "PLN") => {
  const integerPart = Math.trunc(value);
  const decimalPart = formatNumber((value - integerPart) * 100, 0);
  const integerInWords = inWordsPl(integerPart);
  return `${integerInWords} ${currency} ${decimalPart}/100`;
};
