import { Buyer, Seller } from "../types";

export const EPAM: Buyer = {
  name: "EPAM Systems (Poland) Sp. z o.o",
  address: {
    street: "ul. Opolska",
    number: "114",
    city: "Kraków",
    zip: "31-323",
    country: "Polska",
  },
  id: "6751458027",
};
export const ITDEV: Seller = {
  name: "GRZEGORZ BRDEJ IT Development",
  address: {
    street: "ul. Kuźnicy Kołłątajowskiej",
    number: "40/34",
    city: "Kraków",
    zip: "31-234",
    country: "Polska",
  },
  id: "6793146924",
  bank: {
    name: "Bank Millennium S.A.",
    address: {
      street: "ul. Stanisława Żaryna",
      number: "2A",
      city: "Warszawa",
      zip: "02-593",
      country: "Polska",
    },
    swift: "BIGBPLPW",
    number: "PL 56 1160 2202 0000 0003 4831 8842",
  },
};
