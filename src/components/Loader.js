import { TailSpin } from "react-loader-spinner";

const Loader = () => (
  <>
    <TailSpin
      height="80"
      width="80"
      color="#a855f7"
      ariaLabel="tail-spin-loading"
      radius="1"
      visible
    />
  </>
);

export default Loader;