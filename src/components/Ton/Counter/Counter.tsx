import { useMainContract } from "../../../hooks/useMainContract.ts";
import { useTonConnect } from "../../../hooks/useTonConnect.ts";

export const Counter = () => {
  const { val, sendIncrement } = useMainContract();
  const { connected } = useTonConnect();
  console.log(val, "val");
  return (
    <>
      {connected && (
        <a
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </a>
      )}
      <div>Value: {val}</div>
    </>
  );
};
