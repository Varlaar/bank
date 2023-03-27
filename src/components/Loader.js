import { TailSpin } from "react-loader-spinner";

export const Loader = ({ isLoading }) => {
  console.log("spinner >>>", isLoading);
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
        visible={isLoading}
      />
    </div>
  );
};
