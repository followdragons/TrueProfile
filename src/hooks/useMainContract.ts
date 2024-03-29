import { useEffect, useState } from "react";
import { SimpleCounter } from "../../simple-counter/build/SimpleCounter/tact_SimpleCounter.ts";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Address, OpenedContract } from "ton-core";
import { useTonConnect } from "./useTonConnect.ts";
import { toNano } from "@ton/core";

const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
export function useMainContract() {
  const { sender } = useTonConnect();
  const client = useTonClient();
  const [contractData, setContractData] = useState<null | {
    val: number;
  }>({ val: 0 });

  const mainContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = SimpleCounter.fromAddress(
      Address.parse("EQBpAfN92UwASDxc5Q-pJQdjjBpwc9KwtpY6BxiGI_xfW-Lk"),
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return client.open(contract) as OpenedContract<SimpleCounter>;
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!mainContract) return;
      const val = await mainContract.getCounter();
      if (val !== contractData?.val) {
        setContractData({
          val: Number(val),
        });
      }
      await sleep(5000);
      getValue();
    }
    getValue();
  }, [mainContract]);

  return {
    contract_address: mainContract?.address.toString(),
    ...contractData,
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
