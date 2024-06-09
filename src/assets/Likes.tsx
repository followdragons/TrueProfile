import { useTonConnectModal } from "@tonconnect/ui-react";

import { useTonConnect } from "~/hooks/useTonConnect.ts";

export const Likes = ({ count = 134 }) => {
  const { state, open, close } = useTonConnectModal();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontSize: "23px",
        gap: "4px",
        marginLeft: "auto",
      }}
    >
      <img
        onClick={() => open()}
        width={20}
        height={17}
        src="Icon.png"
        alt=""
      />
      <span style={{ color: "#707579", fontSize: 20, fontWeight: 600 }}>
        {count}
      </span>
    </div>
  );
};
