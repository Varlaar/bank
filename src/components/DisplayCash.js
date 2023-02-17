import { useSelector } from "react-redux";

export const DisplayCash = () => {
  const moneyOnAccount = useSelector((state) => {
    console.log(state);
    const { cashReducer } = state;
    return cashReducer.cash;
  });

  return (
    <h1 className="font-bold text-3xl mb-8">
      Текущий счет: {moneyOnAccount} руб
    </h1>
  );
};
