import React, { useEffect, useState } from "react";
import { DisplayCash } from "./components/DisplayCash";
import { ControlCash } from "./components/ControlCash";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const [cash, setCash] = useState(0);
  const [payload, setPayload] = useState("");

  useEffect(() => {
    setPayload("");
  }, [cash]);

  const dispatch = useDispatch();
  const userMoney = useSelector((cash) => cash);
  console.log(userMoney);

  const handleChangePayload = ({ target: { value } }) => {
    const sum = value.replace(/\D/g, "");

    switch (sum[0]) {
      case "0":
        alert("Сумма не должна начинаться с 0!");
        break;

      default:
        setPayload(sum);
        break;
    }
  };

  const handleAddCash = () => {
    const payloadToNumber = Number(payload);
    const newCash = cash + payloadToNumber;
    setCash(newCash);
  };

  const handleGetCash = () => {
    const payloadToNumber = Number(payload);
    const newCash =
      cash === 0 || payloadToNumber > cash
        ? alert(`Недостаточно денег на счете! Вы можете снять ${cash} руб`) ||
          setPayload(cash) ||
          cash
        : cash - payloadToNumber;
    setCash(newCash);
  };

  return (
    <div className="flex flex-col items-center absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
      <DisplayCash cash={cash}></DisplayCash>
      <ControlCash
        payload={payload}
        handleChangePayload={handleChangePayload}
        handleAddCash={handleAddCash}
        handleGetCash={handleGetCash}
      ></ControlCash>
    </div>
  );
};

export default App;
