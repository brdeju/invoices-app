import React from "react";
import ItemRow from "./itemRow";
import type { Item } from "../../types";

const ItemsTable = ({ items }: { items: Item[] }) => {
  return (
    <table className="clear products">
      <thead>
        <tr className="header-row">
          <td>
            Lp
            <br />
            No
          </td>
          <td>
            Nazwa
            <br />
            Description
          </td>
          <td className="unit-col">
            Jedn.
            <br />
            Unit
          </td>
          <td>
            Ilość
            <br />
            Qty
          </td>
          <td className="unit-price">
            Cena netto
            <br />
            Unit price
          </td>
          <td>
            Stawka
            <br />
            Tax Rate
          </td>
          <td className="total-price">
            Wartość netto
            <br />
            Total Excl. Tax
          </td>
          <td className="total-price">
            Wartość brutto
            <br />
            Total Incl. Tax
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
