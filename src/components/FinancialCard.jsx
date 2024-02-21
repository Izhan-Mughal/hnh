import React from "react";
import { FaSackDollar } from "react-icons/fa6";

const FinancialCard = () => {
  return (
    <div className="finance__card">
      <p className="fs-4 icon mb-2">
        <FaSackDollar />
      </p>
      <p className="fw-bold cabin mb-2">The Balance Sheet</p>

      <p className="text__gray2 lato">
        The Balance Sheet is a summary of the assets and liabilities and equity
        of a business at a specific point of time.
      </p>
    </div>
  );
};

export default FinancialCard;
