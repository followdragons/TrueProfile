import { useTonAddress } from "@tonconnect/ui-react";

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
    userFriendlyAddress && (
      <div className="text-xs space-y-2 text-slate-700">
        <div>User-friendly address: {userFriendlyAddress}</div>
        <div>Raw address: {rawAddress}</div>
      </div>
    )
  );
};
