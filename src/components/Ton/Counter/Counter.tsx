import { useMainContract } from "~/hooks/useMainContract";
import { useTonConnect } from "~/hooks/useTonConnect";

export const Counter = () => {
  const { val, balance, sendIncrement, sendTon, withdrawTon } =
    useMainContract();
  const { connected } = useTonConnect();
  console.log(val, "val");
  return (
    <>
      {connected && (
        <>
          <button
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              sendTon();
            }}
          >
            Send Ton
          </button>
          <button
            onClick={() => {
              withdrawTon();
            }}
          >
            Withdraw Ton
          </button>
        </>
      )}
      <div>Value: {val}</div>
      <div>Balance: {balance}</div>
    </>
  );
};
