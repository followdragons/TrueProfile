import { Address, fromNano, toNano } from "@ton/core";
import { useEffect, useState } from "react";

import { useTonClient } from "~/context/TonClient.tsx";
import { SimpleCounter } from "~/contracts/SimpleCounter/tact_SimpleCounter.ts";

import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonConnect } from "./useTonConnect.ts";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

export function useMainContract() {
  const { sender } = useTonConnect();
  const client = useTonClient();

  const [contractData, setContractData] = useState<null | {
    val: number;
    balance: number;
  }>({ val: 0, balance: 0 });

  const mainContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SimpleCounter.fromAddress(
      Address.parse("EQBk322k_JmXaPmXEfS3GV4k7jcBPJt7mBv8QVyBODy5JJwb"),
    );

    return client.open(contract);
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!mainContract) return;
      const val = await mainContract.getCounter();
      const balance = await mainContract?.getBalance();

      setContractData((prevContract) => {
        const newValue = Number(val);
        const newBalance = Number(fromNano(balance));

        if (
          prevContract.val === newValue &&
          prevContract.balance === newBalance
        )
          return prevContract;
        return {
          val: newValue,
          balance: newBalance,
        };
      });

      await sleep(5000);
      getValue();
    }
    getValue();
  }, [mainContract]);

  return {
    contract_address: mainContract?.address.toString(),
    ...contractData,
    withdrawTon: async () => {
      return mainContract?.send(
        sender,
        {
          value: toNano("0.05"),
        },
        {
          $$type: "Withdraw",
          amount: await mainContract?.getBalance(),
        },
      );
    },
    sendTon: () => {
      return mainContract?.send(
        sender,
        {
          value: toNano("1"),
        },
        null,
      );
    },
    sendIncrement: () => {
      const increaseBy = BigInt(Math.floor(Math.random() * 100));
      return mainContract?.send(
        sender,
        {
          value: toNano("0.05"),
        },
        {
          $$type: "Add",
          queryId: 0n,
          amount: increaseBy,
        },
      );
    },
  };
}
