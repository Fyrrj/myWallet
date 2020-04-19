import React from "react";

export const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Zarobek</h4>
        <p className="money-plus"> + PLN 0.00</p>
      </div>
      <div>
        <h4>Strata</h4>
        <p className="money-minus">- PLN 0.00</p>
      </div>
    </div>
  );
};
