import { useTonWallet } from "@tonconnect/ui-react";

export const Wallet = () => {
  const wallet = useTonWallet();
  return (
    wallet && (
      <div className="text-slate-800 text-sm">
        <div>Connected wallet: {(wallet as { name: string }).name}</div>
        <div>Device: {wallet.device.appName}</div>
      </div>
    )
  );
};
