import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "../store/actions";

export const ControlCash = () => {
  const [inputCash, setInputCash] = useState("");
  const dispatch = useDispatch();

  const moneyOnAccount = useSelector((state) => {
    const { cashReducer } = state;
    return cashReducer.cash;
  });

  const handleChangeInputCash = ({ target: { value } }) => {
    let sum = value.replace(/\D/g, "");

    switch (sum[0]) {
      case "0":
        alert("Сумма не должна начинаться с 0!");
        break;

      default:
        setInputCash(Number(sum));
        break;
    }
  };

  const handleAddCash = (inputCash) => {
    dispatch(addCash(inputCash));
  };

  const handleGetCash = (inputCash) => {
    switch (moneyOnAccount === 0 || inputCash > moneyOnAccount) {
      case true:
        alert(
          `Недостаточно денег на счете! Вы можете снять ${moneyOnAccount} руб`
        );
        setInputCash(moneyOnAccount);
        break;

      default:
        dispatch(getCash(inputCash));
        break;
    }
  };

  useEffect(() => {
    setInputCash("");
  }, [moneyOnAccount]);

  return (
    <div className="flex flex-col">
      <input
        className="w-80 px-4 py-2 border-purple-400 border rounded-md mb-4"
        type="text"
        value={inputCash}
        placeholder="Введите сумму"
        onChange={handleChangeInputCash}
      />
      <button
        className="w-80 h-12 px-10 py-2 bg-violet-400 rounded-3xl text-white mb-4"
        onClick={() => handleAddCash(inputCash)}
      >
        Пополнить счет
      </button>
      <button
        className="w-80 h-12 px-10 py-2 border-purple-400 rounded-3xl border font-bold text-purple-400"
        onClick={() => handleGetCash(inputCash)}
      >
        Снять деньги со счета
      </button>
    </div>
  );
};
