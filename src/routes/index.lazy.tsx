import { createLazyFileRoute } from "@tanstack/react-router";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Button } from "antd";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { FaHeart } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { CurrencyList } from "~/components/CurrencyList/CurrencyList.tsx";
import { InvestmentChart } from "~/components/InvestmentCart/InvestmentChart.tsx";
import { CardRecommendation } from "~/components/profile/CardRecommendation.tsx";
import { CompanyCard } from "~/components/profile/CompanyCard.tsx";
import { UserCard } from "~/components/profile/UserCard.tsx";
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
    <div
      style={{
        background: "#e5e7eb",
        height: "100vh",
        padding: "20px",
        color: "black",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        overflow: "scroll",
      }}
    >
      <UserCard />
      <CompanyCard />
      <CardRecommendation />
    </div>
  );
}
