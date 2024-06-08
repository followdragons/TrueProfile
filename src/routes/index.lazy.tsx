import { createLazyFileRoute } from "@tanstack/react-router";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Button } from "antd";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { CurrencyList } from "~/components/CurrencyList/CurrencyList.tsx";
import { InvestmentChart } from "~/components/InvestmentCart/InvestmentChart.tsx";
// import { TonConnectButton } from '@tonconnect/ui-react'
//
// import { Address } from '~/components/Ton/Address/Address'
// import { Counter } from '~/components/Ton/Counter/Counter'
// import { Wallet } from '~/components/Ton/Wallet/Wallet'

export const Route = createLazyFileRoute("/")({
  component: Index,
});


function Index() {

  return (
    <div><TonConnectButton /></div>
  );
}
