import { useSelector } from "react-redux";
import { selectCash } from "../store/cash/selector";

export const DisplayCash = () => {
  const cash = useSelector(selectCash);

  return (
    <h1 className="text-violet-500 font-bold text-3xl mb-8">
      Текущий счет: {cash} руб
    </h1>
  );
};
