import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { formatNumber } from "../../helpers/number";
import type { Item } from "../../types";

const ItemRow = ({ item }: { item: Item }) => {
  const netto = useMemo(() => Number(item.price) * Number(item.quantity), [item]);
  const brutto = useMemo(() => netto + (netto * Number(item.tax)) / 100, [netto, item.tax]);
  return (
    <tr className="product-row">
      <td className="number-value"><Text>{item.index + 1}</Text></td>
      <td className="string-value"><Text>{item.description}</Text></td>
      <td className="string-value"><Text>{item.unit}</Text></td>
      <td className="number-value"><Text>{item.quantity}</Text></td>
      <td className="number-value"><Text>{formatNumber(item.price)}</Text></td>
      <td className="number-value"><Text>{item.tax}%</Text></td>
      <td className="number-value"><Text>{formatNumber(netto)}</Text></td>
      <td className="number-value"><Text>{formatNumber(brutto)}</Text></td>
    </tr>
  );
};

export default ItemRow;
