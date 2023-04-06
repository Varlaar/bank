import { useSelector } from "react-redux";
import { selectCash } from "../store/cash/selector";

const DisplayCash = () => {
  const cash = useSelector(selectCash);
  return <h1 className="mb-8">Текущий счет: {cash} руб</h1>;
};

export default DisplayCash;
