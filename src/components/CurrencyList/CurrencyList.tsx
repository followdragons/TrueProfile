import { Dispatch, SetStateAction } from "react";

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

interface Props {
  onChangeToken: Dispatch<SetStateAction<string>>;
}

export const CurrencyList = ({ onChangeToken }: Props) => {
  return (
    <div className="flex flex-col gap-2.5">
      {TOKENS.map(({ img, name, symbol }) => {
        return (
          <div
            key={symbol}
            onClick={() => onChangeToken(symbol)}
            className="flex flex-row items-center gap-10 p-3  pt-2 pb-2 bg-section-color rounded-2xl hover:opacity-75 cursor-pointer"
          >
            <img className="w-9 h-9" src={img} alt="" />
            <div className="text-base flex flex-row justify-between w-full items-center">
              <div className="flex flex-row">
                <div className="text-xl">{name}</div>
                <div className="text-xs text-zinc-400 font-light">{symbol}</div>
              </div>
              <span className="text-xs text-zinc-400 font-light">6.99$</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
