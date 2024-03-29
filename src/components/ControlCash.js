import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "../store/cash/actions";
import { selectCash } from "../store/cash/selector";

export const ControlCash = () => {
  const [inputCash, setInputCash] = useState(""); // Сумма для внесения / снятия денег из поля 'input'
  const dispatch = useDispatch();
  const moneyOnAccount = useSelector(selectCash); // Текущая сумма на счету пользователя
  const disabledAddCash = inputCash === 0 || inputCash === ""; // Блокировка кнопки пополнения счета, если введенная сумма 0 руб
  const disabledGetCash = !moneyOnAccount || inputCash === 0 || inputCash === ""; // Блокировка кнопки снятия со счета, если на счету 0 руб

  // Значение суммы в поле 'input'
  const handleChangeInputCash = ({ target: { value } }) => {
    let sum = Number(value.replace(/[^\d]/g, '')); // Исключаем запись в поле input всех символов, кроме чисел
    setInputCash(sum);
  };

  // Внесение денег на счет
  const handleAddCash = useCallback(
    (inputCash) => {
      dispatch(addCash(inputCash));
      setInputCash("");
    },
    [dispatch]
  );

  // Снятие денег со счета
  const handleGetCash = useCallback(
    (inputCash) => {
      if (inputCash > moneyOnAccount) {
        alert(
          `На Вашем счету недостаточно средств! Вы можете снять ${moneyOnAccount} руб`
        );
        setInputCash(moneyOnAccount);
      } else {
        dispatch(getCash(inputCash));
        setInputCash("");
      }
    },
    [dispatch, moneyOnAccount]
  );

  return (
    <div className="flex flex-col">
      <input
        className="form-input w-80 px-4 py-2 border-purple-400 border rounded-md mb-4"
        type="text"
        value={inputCash}
        placeholder="Введите сумму"
        onInput={handleChangeInputCash}
      />
      <button
        className="w-80 h-12 px-10 py-2 bg-violet-400 rounded-3xl text-white mb-4"
        onClick={() => handleAddCash(inputCash)}
        disabled={disabledAddCash}
      >
        Пополнить счет
      </button>
      <button
        className="bg-white w-80 h-12 px-10 py-2 border-purple-400 rounded-3xl border font-bold text-purple-400"
        onClick={() => handleGetCash(inputCash)}
        disabled={disabledGetCash}
      >
        Снять деньги со счета
      </button>
    </div>
  );
};
