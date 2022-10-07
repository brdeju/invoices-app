import React, { useMemo } from "react";
import { formatNumber } from "../../helpers/number";
import type { Item } from "../../types";

const ItemRow = ({ item }: { item: Item }) => {
  const netto = useMemo(() => Number(item.price) * Number(item.quantity), [item]);
  const brutto = useMemo(() => netto + (netto * Number(item.tax)) / 100, [netto, item.tax]);
  return (
    <tr className="product-row">
      <td className="number-value">{item.index + 1}</td>
      <td className="string-value">{item.description}</td>
      <td className="string-value">{item.unit}</td>
      <td className="number-value">{item.quantity}</td>
      <td className="number-value">{formatNumber(item.price)}</td>
      <td className="number-value">{item.tax}%</td>
      <td className="number-value">{formatNumber(netto)}</td>
      <td className="number-value">{formatNumber(brutto)}</td>
    </tr>
  );
};

export default ItemRow;
