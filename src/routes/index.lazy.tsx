import { createLazyFileRoute } from "@tanstack/react-router";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Button } from "antd";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
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
    <div
      style={{
        background: "#e5e7eb",
        height: "100vh",
        padding: "20px",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img src="https://ddejfvww7sqtk.cloudfront.net/nft-content-cache/images/EQAzlVUwnQKBSJeyyP-733Xp44tnZDg_b_dzMqZEO-z58yeC/a81361be9c3f949b_18f0b147236" />
          </div>
          <div>
            <a>@FollowDragons</a>
            <div>Valrii</div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "23px",
            gap: "10px",
          }}
        >
          <FaHeart color="#3b82f6" />
          <span>134</span>
        </div>
        <div style={{ fontSize: "15px" }}>
          <div>
            Ton ambassador PM at <a className="text-blue-500">Follow dragons</a>
          </div>
          <div>
            Best P2P on TON:{" "}
            <a className="text-blue-500" href="">
              LEAGUE OF DRAGONS
            </a>
          </div>
          <div>
            BEST memcoin on{" "}
            <a className="text-blue-500" href="">
              TON Dracoin
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
