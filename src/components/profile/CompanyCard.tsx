import { ArrowDown } from "~/components/profile/assets/ArrowDown.tsx";

export const CompanyCard = () => {
  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      <div style={{ color: "#707579", fontSize: 13, paddingLeft: 16 }}>
        CURRENT COMPANY
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "16px",
          padding: "20px",
          gap: "20px",
          height: 132,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", gap: 20 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img src="companylogo.jpg" />
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 600 }}>FollowDragons</div>
              <a
                style={{ fontSize: 16, fontWeight: 600 }}
                className="text-blue-500"
              >
                @Dragon_TON
              </a>
            </div>
          </div>
          <div
            style={{
              color: "grey",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span>
              <span>Worked in </span>
              <strong> 3 others companies</strong>
            </span>
            <ArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};
