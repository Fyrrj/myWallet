import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const handleAddTransaction = (e) => {
    if (amount === 0) {
      alert("To zero nic nie wniesie do Twojego świata :)");
      return;
    } else if (text === "" || text === " " || text === null) {
      alert("Wprowadź nazwę transakcji !");
      return;
    }

    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 141000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Nowa transakcja</h3>
      <form onSubmit={handleAddTransaction}>
        <div className="form-control">
          <label htmlFor="text">Nazwa transakcji</label>
          <input
            type="text"
            placeholder="Wpisz nazwę transakcji..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Wartość transakcji <br /> (ujemna - wydatek np.: -200, dodatnia -
            dochód, np: 1000)
          </label>
          <input
            type="number"
            placeholder="Wpisz wartość..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Dodaj transakcję</button>
      </form>
    </>
  );
};
