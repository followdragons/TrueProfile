import { useTonAddress } from "@tonconnect/ui-react";

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
    userFriendlyAddress && (
      <div>
        <div>User-friendly address: {userFriendlyAddress}</div>
        <div>Raw address: {rawAddress}</div>
      </div>
    )
  );
};
