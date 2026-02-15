import { useState, useEffect } from "react";
import { theme } from "../theme";

export default function Navbar({ setCategory }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = [
    { key: "all", label: "All" },
    { key: "rings", label: "Rings" },
    { key: "bracelet", label: "Bracelet" },
    { key: "necklace", label: "Necklace" },
    { key: "bangles", label: "Bangles" },
    { key: "earring", label: "Earring" },
    { key: "handchain", label: "Hand Chain" },
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#000000",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 25px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        style={{
          color: theme.gold,
          letterSpacing: "2px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={() => setCategory("all")}
      >
        Modern Zewar
      </h2>

      {!isMobile && (
        <div style={{ display: "flex", gap: "14px" }}>
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              style={{
                background: "transparent",
                border: `1px solid ${theme.gold}`,
                color: theme.gold,
                padding: "6px 16px",
                borderRadius: "25px",
                cursor: "pointer",
                fontSize: "14px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = theme.gold;
                e.target.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = theme.gold;
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
