import React from "react";

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label for="text">Nazwa</label>
          <input type="text" placeholder="Wpisz nazwę transakcji..." />
        </div>
        <div className="form-control">
          <label for="amount">
            Wartość <br /> (ujemna - wydatek, dodatnia - dochód)
          </label>
          <input type="number" placeholder="Wpisz wartość..." />
        </div>
        <button className="btn">Dodaj transakcję</button>
      </form>
    </>
  );
};
