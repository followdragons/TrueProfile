import { createLazyFileRoute } from "@tanstack/react-router";

import { UserCard } from "~/components/profile/UserCard.tsx";

export const MyProfile = () => {
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
      <div style={{ color: "#707579", fontSize: 13, paddingLeft: 16 }}>
        MY PROFILE
      </div>
      <UserCard my={true} />
      <div style={{ color: "#707579", fontSize: 13, paddingLeft: 16 }}>
        SETTINGS
      </div>
      <div style={{ background: "#FFFFFF", borderRadius: "12px", padding: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 8,
            paddingTop: 8,
            borderBottom: "1px solid #EFEFF4",
            fontSize: 17,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img width={22} height={22} src="/heart_24.png" alt="" />
            <span>Saved profiles</span>
          </div>
          <img src="/arrowRight.png" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 8,
            paddingBottom: 8,
            borderBottom: "1px solid #EFEFF4",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img width={22} height={22} src="/wallet.png" alt="" />
            <span>Wallet</span>
          </div>
          <img src="/arrowRight.png" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 8,
            paddingBottom: 8,
            borderBottom: "1px solid #EFEFF4",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/aaaa.png" alt="" />
            <span>Notification</span>
          </div>
          <img src="/arrowRight.png" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 8,
            paddingBottom: 8,
            borderBottom: "1px solid #EFEFF4",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/edit.png" alt="" />
            <span>My Recommendations</span>
          </div>
          <img src="/arrowRight.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/myprofile")({
  component: MyProfile,
});
