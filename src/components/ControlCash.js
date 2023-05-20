import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "../store/cash/actions";
import { selectCash } from "../store/cash/selector";
import { normalizeValue } from "../utils";
import { Button } from "./Button";
import { Input } from "./Input";

const ControlCash = () => {
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
      <Input
        className="input mb-4"
        type="text"
        value={inputCash}
        placeholder="Введите сумму"
        onInput={handleInputCashChange}
      />
      <Button
        title="Пополнить счет"
        className={
          disabledAddCash ? "bth mb-4" : "bth mb-4 hover:bg-purple-500"
        }
        onClick={() => handleAddCash(inputCash)}
        disabled={disabledAddCash}
      />
      <Button
        title="Снять деньги со счета"
        className={
          disabledGetCash
            ? "bth text-purple-300 opacity-70 disabled:bg-white"
            : "bth border border-violet-400 bg-white text-violet-400 hover:border-transparent hover:bg-violet-400 hover:text-white"
        }
        onClick={() => handleGetCash(inputCash)}
        disabled={disabledGetCash}
      />
    </div>
  );
};

export default ControlCash;
