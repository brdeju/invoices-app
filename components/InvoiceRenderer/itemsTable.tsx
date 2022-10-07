import React from "react";
import { Text } from 'react-native';
import ItemRow from "./itemRow";
import type { Item } from "../../types";

const ItemsTable = ({ items }: { items: Item[] }) => {
  return (
    <table className="clear products">
      <thead>
        <tr className="header-row">
          <td>
            <Text>Lp</Text>
            <Text>No</Text>
          </td>
          <td>
            <Text>Nazwa</Text>
            <Text>Description</Text>
          </td>
          <td className="unit-col">
            <Text>Jedn.</Text>
            <Text>Unit</Text>
          </td>
          <td>
            <Text>Ilość</Text>
            <Text>Qty</Text>
          </td>
          <td className="unit-price">
            <Text>Cena netto</Text>
            <Text>Unit price</Text>
          </td>
          <td>
            <Text>Stawka</Text>
            <Text>Tax Rate</Text>
          </td>
          <td className="total-price">
            <Text>Wartość netto</Text>
            <Text>Total Excl. Tax</Text>
          </td>
          <td className="total-price">
            <Text>Wartość brutto</Text>
            <Text>Total Incl. Tax</Text>
          </td>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ItemRow item={item} key={item.index} />
        ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
