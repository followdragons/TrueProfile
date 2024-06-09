import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { VerifiedIcon } from "./assets/VerifiedIcon.tsx";

export const UserCard = ({ my = false }) => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => (my ? null : setFlipped((prev) => !prev));

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div
        style={{
          display: "flex",
          height: 226,
          flexDirection: "column",
          background: "white",
          borderRadius: "12px",
          padding: "16px",
          gap: "8px",
          border: "1px solid #3596FF",
          borderColor: my ? "transparent" : "#3596FF",
        }}
        onClick={handleFlip}
      >
        <div style={{ display: "flex", gap: 20 }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img src="ava.jpg" />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <a className="text-blue-500" style={{ fontSize: 20 }}>
                @FollowDragons
              </a>
              <VerifiedIcon />
            </div>
            <div style={{ fontSize: "20px", fontWeight: "600" }}>Valerii</div>
          </div>
        </div>
        {!my ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "23px",
              gap: "4px",
            }}
          >
            <img width={29} height={24} src="Icon.png" alt="" />
            <span style={{ color: "#707579", fontSize: 20, fontWeight: 600 }}>
              134
            </span>
          </div>
        ) : null}
        <div style={{ fontSize: "17px" }}>
          <div>
            TON Ambassador PM at <a className="text-blue-500">Follow dragons</a>
          </div>
          <div>
            Best P2E on TON:{" "}
            <a className="text-blue-500" href="">
              LEAGUEofDRAGONS
            </a>
          </div>
          <div>
            BEST memcoin on{" "}
            <a className="text-blue-500" href="">
              TON Dracoin
            </a>
          </div>
        </div>
        {my ? (
          <div style={{ width: 53 }} className="second-button">
            Edit
          </div>
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          height: 226,
          background: "white",
          borderRadius: "12px",
          padding: "16px",
          gap: "8px",
          border: "1px solid #3596FF",
        }}
        onClick={handleFlip}
      >
        <img height={186} width={186} src="qr.png" alt="" />
        <div style={{ fontSize: 13 }}>
          Scan this QR-code to open the Profile of the person:
        </div>
      </div>
    </ReactCardFlip>
  );
};
