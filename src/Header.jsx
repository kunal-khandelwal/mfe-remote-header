import React from "react";

const Header = () => {
  return (
    <div
      style={{
        background: "#2d3436",
        color: "#fff",
        padding: "16px 24px",
        textAlign: "center",
        fontSize: "18px",
      }}
    >
      📦 Header — loaded from <strong>Remote (port 3001)</strong>
    </div>
  );
};

export default Header;
