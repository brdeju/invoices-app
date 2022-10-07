export const formatNumber = (value: string | number, precision: number = 2) =>
  Intl.NumberFormat(undefined, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).format(Number(value));
