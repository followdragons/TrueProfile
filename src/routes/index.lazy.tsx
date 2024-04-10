import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "antd";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { InvestmentChart } from "~/components/InvestmentCart/InvestmentChart.tsx";
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

const INVESTMENT_AMOUNT = [
  { amount: 50, className: "text-emerald-50" },
  { amount: 100, className: "text-emerald-100" },
  { amount: 300, className: "text-emerald-200" },
  { amount: 500, className: "text-emerald-300" },
  { amount: 800, className: "text-emerald-400" },
  { amount: 1000, className: "text-emerald-500" },
];
const INVESTMENT_PERIOD = ["day", "week", "month"];

function Index() {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState(INVESTMENT_PERIOD[1]);
  const [date, setDate] = useState("2022-01-01");
  const [showChart, setShowChart] = useState(false);

  return (
    <>
      {showChart ? (
        <InvestmentChart amount={amount} period={period} />
      ) : (
        <>
          <div className="text-3xl font-bold gap-5 flex flex-col m-auto">
            {amount ? (
              <div className="gap-10 flex flex-col">
                <div className="text-blue-500 text-center">Period:</div>
                <div className="flex flex-wrap gap-10 m-auto">
                  {INVESTMENT_PERIOD.map((investmentPeriod) => (
                    <div
                      onClick={() => setPeriod(investmentPeriod)}
                      className={twMerge(
                        "capitalize text-center gap-8 text-2xl",
                        period === investmentPeriod ? "text-red-400" : null,
                      )}
                    >
                      {investmentPeriod}
                    </div>
                  ))}
                </div>
                <div className="text-center flex flex-col gap-5">
                  <div className="text-2xl text-amber-400">Starting from:</div>
                  <input
                    type="date"
                    value={date}
                    className="w-full p-5"
                    onChange={({ target: { value } }) => setDate(value)}
                  />
                </div>
              </div>
            ) : null}
            {token && !amount ? (
              <div className="m-auto text-center gap-10 flex flex-col">
                <div className="">Investment amount:</div>
                <div className="flex flex-wrap gap-8 p-4">
                  {INVESTMENT_AMOUNT.map(
                    ({ amount: investmentAmount, className }) => (
                      <div
                        className={className}
                        key={investmentAmount}
                        onClick={() => setAmount(investmentAmount)}
                      >
                        {investmentAmount} $
                      </div>
                    ),
                  )}
                </div>
              </div>
            ) : null}
            {!token
              ? TOKENS.map(({ img, name, symbol }) => {
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
                })
              : null}
          </div>
          {amount ? (
            <Button
              className="bg-emerald-500 m-auto font-bold"
              disabled={!date || !period}
              type="primary"
              size="large"
              onClick={() => setShowChart(true)}
            >
              Calculate your investment
            </Button>
          ) : null}
        </>
      )}
    </>
    // <div className="p-4">
    //   <Address />
    //   <Wallet />
    //   <Counter />
    //   <TonConnectButton className='ml-32 min-w-max' />
    // </div>
  );
}
