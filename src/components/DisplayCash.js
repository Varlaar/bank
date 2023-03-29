import { useSelector } from "react-redux";
import { selectCash } from "../store/cash/selector";

export const DisplayCash = () => {
  const cash = useSelector(selectCash);

  return (
    <h1 className="mb-8 text-3xl font-bold text-violet-500">
      Текущий счет: {cash} руб
    </h1>
  );
};
