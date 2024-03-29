import "./App.css";

import { TonConnectButton, TonConnectUIProvider } from "@tonconnect/ui-react";
import { Address } from "./components/Ton/Address/Address.tsx";
import { Wallet } from "./components/Ton/Wallet/Wallet.tsx";
import { Counter } from "./components/Ton/Counter/Counter.tsx";

function App() {
  return (
    <TonConnectUIProvider
      manifestUrl="https://valeryv99.github.io/TonRockPaperScissors/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/valery_99_bot",
      }}
    >
      <Address />
      <Wallet />
      <Counter />
      <TonConnectButton />
    </TonConnectUIProvider>
  );
}

export default App;
