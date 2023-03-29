import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "../store/cash/actions";
import { selectCash } from "../store/cash/selector";
import { normalizeValue } from "../utils";

export const ControlCash = () => {
  const [inputCash, setInputCash] = useState(""); // Сумма для внесения / снятия денег
  const dispatch = useDispatch();
  const moneyOnAccount = useSelector(selectCash); // Текущая сумма на счету пользователя
  const disabledAddCash = inputCash === 0 || inputCash === ""; // Блокировка кнопки пополнения счета, если введенная сумма 0 руб
  const disabledGetCash = !moneyOnAccount || disabledAddCash; // Блокировка кнопки снятия со счета, если на счету 0 руб

  // Значение суммы в поле 'input'
  const handleInputCashChange = ({ target: { value } }) => {
    const depositMoney = normalizeValue(value); // Сумма для внесения / снятия денег, введенная пользователем
    setInputCash(depositMoney);
  };

  // Внесение денег на счет
  const handleAddCash = (inputCash) => {
    dispatch(addCash(inputCash));
    setInputCash("");
  };

  // Снятие денег со счета
  const handleGetCash = (inputCash) => {
    if (inputCash > moneyOnAccount) {
      alert(
        `На Вашем счету недостаточно средств! Вы можете снять ${moneyOnAccount} руб`
      );
      setInputCash(moneyOnAccount);
      return;
    }
    dispatch(getCash(inputCash));
    setInputCash("");
  };

  return (
    <div className="flex flex-col">
      <input
        className="form-input mb-4 w-80 rounded-md border border-violet-400 px-4 py-2"
        type="text"
        value={inputCash}
        placeholder="Введите сумму"
        onInput={handleInputCashChange}
      />
      <button
        className={
          disabledAddCash
            ? "mb-4 h-12 w-80 rounded-3xl bg-violet-200 px-10 py-2 font-bold text-white"
            : "mb-4 h-12 w-80 rounded-3xl bg-violet-400 px-10 py-2 font-bold text-white transition duration-300 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-900"
        }
        onClick={() => handleAddCash(inputCash)}
        disabled={disabledAddCash}
      >
        Пополнить счет
      </button>
      <button
        className={
          disabledGetCash
            ? "h-12 w-80 rounded-3xl bg-white px-10 py-2 font-bold text-purple-300 opacity-70"
            : "duration-2000 h-12 w-80 rounded-3xl border border-violet-400 bg-white px-10 py-2 font-bold text-violet-400 transition hover:border-none hover:bg-violet-400 hover:text-white"
        }
        onClick={() => handleGetCash(inputCash)}
        disabled={disabledGetCash}
      >
        Снять деньги со счета
      </button>
    </div>
  );
};
