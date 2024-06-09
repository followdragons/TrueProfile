import { ArrowDown } from "~/components/profile/assets/ArrowDown.tsx";

export const CardRecommendation = () => {
  return (
    <div style={{ display: "flex", gap: 8, flexDirection: "column" }}>
      <div style={{ color: "#707579", fontSize: 13, paddingLeft: 16 }}>
        RECOMMENDATIONS (165)
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "white",
          borderRadius: "16px",
          padding: "16px",
        }}
      >
        <div style={{ display: "flex", gap: "20px" }}>
          <div
            style={{
              width: 40,
              minWidth: 40,
              height: 40,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img src="valery.jpg" alt="" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              borderRadius: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 4,
                alignItems: "center",
                fontSize: 17,
              }}
            >
              <strong>Valery Viarenich</strong>
              <a className="text-blue-500">Prom.io</a>
            </div>
            <span style={{ fontSize: 13 }}>
              Valerii brings a positive attitude and an impressive set of skills
              to everything he did. His abilities is a huge plus for our team,
              and his knack for teamwork and communication makes him a joy to
              work with.
            </span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            margin: "auto",
            fontSize: 13,
          }}
        >
          <span> Read more</span>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};
