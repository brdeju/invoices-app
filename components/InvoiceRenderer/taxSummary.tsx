import React from "react";
import { formatNumber } from "../../helpers/number";
import type { Totals } from "../../types";

const TaxSummary = ({ total }: { total: Totals }) => {
  return (
    <table className="clear vat-value half-width">
      <tbody>
        <tr className="header-row">
          <td>
            Stawka VAT
            <br />
            Tax Rate
          </td>
          <td>
            Wartość netto
            <br />
            Total Excl. Tax
          </td>
          <td>
            Kwota VAT
            <br />
            Tax
          </td>
          <td>
            Wartość brutto
            <br />
            Total Incl. Tax
          </td>
        </tr>

        <tr className="header-row">
          <td>{total.taxLabel}</td>
          <td className="number-value">{formatNumber(total.netto)}</td>
          <td className="number-value">{formatNumber(total.tax)}</td>
          <td className="number-value">{formatNumber(total.brutto)}</td>
        </tr>

        <tr className="header-row">
          <td>Razem / Total</td>
          <td className="number-value">{formatNumber(total.netto)}</td>
          <td className="number-value">{formatNumber(total.tax)}</td>
          <td className="number-value">{formatNumber(total.brutto)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TaxSummary;
