import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { getInWord } from "../../helpers/invoice";
import { formatNumber } from "../../helpers/number";
import type { Totals } from "../../types";

const Summaries = ({ total }: { total: Totals }) => {
  const alreadyPaid = 0;
  const inWords = useMemo(() => getInWord(total.brutto), [total]);

  return (
    <table className="to-pay">
      <tbody>
        <tr>
          <td><Text>Zapłacono / Already Paid</Text></td>
          <td className="number-value"><Text>{formatNumber(alreadyPaid)} PLN</Text></td>
        </tr>

        <tr>
          <td><Text>Do zapłaty / Total Due</Text></td>
          <td className="number-value">
            <Text>{formatNumber(total.brutto - alreadyPaid)} PLN</Text>
          </td>
        </tr>

        <tr>
          <td><Text>Razem / Total</Text></td>
          <td className="number-value"><Text>{formatNumber(total.brutto)} PLN</Text></td>
        </tr>

        <tr>
          <td><Text>Słownie / In words</Text></td>
        </tr>

        <tr>
          <td colSpan={2} className="number-value">
            <Text>{inWords}</Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Summaries;
