import { useMainContract } from "../../../hooks/useMainContract.ts";
import { useTonConnect } from "../../../hooks/useTonConnect.ts";

export const Counter = () => {
  const { val, sendIncrement } = useMainContract();
  const { connected } = useTonConnect();
  console.log(val, "val");
  return (
    <>
      {connected && (
        <button
          onClick={() => {
            sendIncrement();
          }}
        >
          Increment
        </button>
      )}
      <div>Value: {val}</div>
    </>
  );
};
