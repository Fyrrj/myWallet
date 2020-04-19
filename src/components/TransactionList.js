import React from "react";

export const TransactionList = () => {
  return (
    <>
      <h3>Historia</h3>
      <ul className="list">
        <li className="minus">
          Zapłata za studia <span>- PLN 975</span>
          <button className="delete-btn">x</button>
        </li>
        <li className="minus">
          Zakup nieruchomości <span>- PLN 3000000</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
