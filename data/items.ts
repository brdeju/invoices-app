import { Unit } from "../helpers/enums";
import { Item } from "../types";

export const EPAM_WORKTIME_DEFAULT: Item = {
  index: 0,
  description:
    "Usługi dostarczone na podstawie kontraktu z dnia 01.02.2021 pomiędzy GRZEGORZ BRDEJ IT Development a Epam Systems Limited / Services provided as per agreement of 01.02.2021 between GRZEGORZ BRDEJ IT Development and Epam Systems Limited",
  unit: Unit.HOUR,
  quantity: '160',
  price: '160',
  tax: '23',
  currency: "PLN",
};

export const EPAM_EXTRA: Item = {
  index: 1,
  description: "Dodatkowe usługi programistyczne / Extra development services",
  unit: Unit.NA,
  quantity: '1',
  price: '2000',
  tax: '23',
  currency: "PLN",
};
