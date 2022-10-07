import React, { useMemo } from "react";
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
          <td>Zapłacono / Already Paid</td>
          <td className="number-value">{formatNumber(alreadyPaid)} PLN</td>
        </tr>

        <tr>
          <td>Do zapłaty / Total Due</td>
          <td className="number-value">
            <strong>{formatNumber(total.brutto - alreadyPaid)} PLN</strong>
          </td>
        </tr>

        <tr>
          <td>Razem / Total</td>
          <td className="number-value">{formatNumber(total.brutto)} PLN</td>
        </tr>

        <tr>
          <td>Słownie / In words</td>
        </tr>

        <tr>
          <td colSpan={2} className="number-value">
            {inWords}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Summaries;
