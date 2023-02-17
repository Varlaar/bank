import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCash, getCash } from "../store/actionCreators";
import { selectCash } from "../store/cash/selector";

export const ControlCash = () => {
  const [inputCash, setInputCash] = useState(""); // Сумма для внесения / снятия денег в поле 'input'
  const dispatch = useDispatch();
  const moneyOnAccount = useSelector(selectCash); // Текущая сумма на счету пользователя

  // Значение суммы в поле 'input'
  const handleChangeInputCash = ({ target: { value } }) => {
    let sum = Number(value.replace(/\D/g, ""));
    setInputCash(sum);
  };

  // Внесение денег на счет
  const handleAddCash = useCallback(
    (inputCash) => {
      switch (inputCash) {
        case 0:
          alert("Нельзя внести 0 руб! Пожалуйста, введите необходимую сумму.");
          setInputCash("");
          break;

        case "":
          alert("Пожалйста, укажите сумму!");
          break;

        default:
          dispatch(addCash(inputCash));
          setInputCash("");
          break;
      }
    },
    [dispatch]
  );

  // Снятие денег со счета
  const handleGetCash = useCallback(
    (inputCash) => {
      if (inputCash > moneyOnAccount && moneyOnAccount !== 0) {
        alert(
          `На Вашем счету недостаточно средств! Вы можете снять ${moneyOnAccount} руб`
        );
        setInputCash(moneyOnAccount);
      } else if (moneyOnAccount === 0 || inputCash === 0) {
        alert("Нельзя снять 0 руб! Выберите другую сумму.");
        setInputCash("");
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
        className="bg-white w-80 h-12 px-10 py-2 border-purple-400 rounded-3xl border font-bold text-purple-400"
        onClick={() => handleGetCash(inputCash)}
      >
        Снять деньги со счета
      </button>
    </div>
  );
};
