import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
// import { TonConnectButton } from '@tonconnect/ui-react'
//
// import { Address } from '~/components/Ton/Address/Address'
// import { Counter } from '~/components/Ton/Counter/Counter'
// import { Wallet } from '~/components/Ton/Wallet/Wallet'

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const TOKENS = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    coingecko_id: "bitcoin",
    img: "https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    coingecko_id: "ethereum",
    img: "https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628",
  },
  {
    name: "BNB",
    symbol: "BNB",
    coingecko_id: "bnb",
    img: "https://assets.coingecko.com/coins/images/825/standard/bnb-icon2_2x.png?1696501970",
  },
  {
    name: "Toncoin",
    symbol: "TON",
    coingecko_id: "ton",
    img: "https://assets.coingecko.com/coins/images/17980/standard/ton_symbol.png?1696517498",
  },
];

function Index() {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState();

  return (
    <div className="text-3xl font-bold gap-5 flex flex-col m-auto">
      {token ? (
        <div>
          <div>100</div>
          <div>300</div>
          <div>500</div>
          <div>800</div>
          <div>1100</div>
        </div>
      ) : null}
      {TOKENS.map(({ img, name, symbol }) => {
        return (
          <div
            key={symbol}
            onClick={() => setToken(symbol)}
            className="flex flex-row items-center gap-10 border-b-2 border-b-blue-300 pb-3"
          >
            <img src={img} alt="" />
            <span>{name}</span>
          </div>
        );
      })}
    </div>
    // <div className="p-4">
    //   <Address />
    //   <Wallet />
    //   <Counter />
    //   <TonConnectButton className='ml-32 min-w-max' />
    // </div>
  );
}
