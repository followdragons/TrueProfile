import { createLazyFileRoute } from "@tanstack/react-router";
import { Button, DatePickerProps } from "antd";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
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

const INVESTMENT_AMOUNT = [50, 100, 300, 500, 800, 1000];
const INVESTMENT_PERIOD = ["day", "week", "month"];

function Index() {
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState(INVESTMENT_PERIOD[1]);
  const [date, setDate] = useState(dayjs("2022-01-01"));

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    setDate(date);
  };

  return (
    <>
      <div className="text-3xl font-bold gap-5 flex flex-col m-auto">
        {amount ? (
          <div className="gap-10 flex flex-col">
            <div className="text-blue-500 text-center">Period:</div>
            <div className="flex flex-wrap gap-10">
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
              <DatePicker
                allowClear={false}
                value={date}
                size="large"
                variant="outlined"
                className="w-full"
                onChange={onChange}
              />
            </div>
          </div>
        ) : null}
        {token && !amount ? (
          <div className="m-auto text-center gap-10 flex flex-col">
            <div className="">Investment amount:</div>
            <div className="flex flex-wrap gap-8 p-4">
              {INVESTMENT_AMOUNT.map((investmentAmount, index) => (
                <div
                  className={`text-emerald-${index > 0 ? index * 100 : 50}`}
                  key={investmentAmount}
                  onClick={() => setAmount(investmentAmount)}
                >
                  {investmentAmount} $
                </div>
              ))}
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
        >
          Calculate your investment
        </Button>
      ) : null}
    </>
    // <div className="p-4">
    //   <Address />
    //   <Wallet />
    //   <Counter />
    //   <TonConnectButton className='ml-32 min-w-max' />
    // </div>
  );
}
