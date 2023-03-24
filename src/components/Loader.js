import { TailSpin } from "react-loader-spinner";
import { selectLoader } from "../store/loader/selector";
import { useSelector } from "react-redux";

export const Loader = () => {
  const loader = useSelector(selectLoader);
  console.log("spinner >>>", loader);
  return (
    <div className="loader-styles">
      <TailSpin
        height="80"
        width="80"
        color="#a855f7"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loader}
      />
    </div>
  );
};
