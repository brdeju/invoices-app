import React from "react";
import { Text } from 'react-native';
import { formatNumber } from "../../helpers/number";
import type { Totals } from "../../types";

const TaxSummary = ({ total }: { total: Totals }) => {
  return (
    <table className="clear vat-value half-width">
      <tbody>
        <tr className="header-row">
          <td>
            <Text>Stawka VAT</Text>
            <Text>Tax Rate</Text>
          </td>
          <td>
            <Text>Wartość netto</Text>
            <Text>Total Excl. Tax</Text>
          </td>
          <td>
            <Text>Kwota VAT</Text>
            <Text>Tax</Text>
          </td>
          <td>
            <Text>Wartość brutto</Text>
            <Text>Total Incl. Tax</Text>
          </td>
        </tr>

        <tr className="header-row">
          <td><Text>{total.taxLabel}</Text></td>
          <td className="number-value"><Text>{formatNumber(total.netto)}</Text></td>
          <td className="number-value"><Text>{formatNumber(total.tax)}</Text></td>
          <td className="number-value"><Text>{formatNumber(total.brutto)}</Text></td>
        </tr>

        <tr className="header-row">
          <td><Text>Razem / Total</Text></td>
          <td className="number-value"><Text>{formatNumber(total.netto)}</Text></td>
          <td className="number-value"><Text>{formatNumber(total.tax)}</Text></td>
          <td className="number-value"><Text>{formatNumber(total.brutto)}</Text></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TaxSummary;
