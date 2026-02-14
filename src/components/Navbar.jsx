import { useState, useEffect } from "react";
import { theme } from "../theme";

export default function Navbar({ setCategory }) {
  const [menuOpen, setMenuOpen] = useState(false);
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
        background: theme.maroon,
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
      }}
    >
      <h2
        style={{
          color: theme.gold,
          letterSpacing: "2px",
          cursor: "pointer",
        }}
        onClick={() => setCategory("all")}
      >
        Modern Zewar
      </h2>

      {!isMobile && (
        <div style={{ display: "flex", gap: "15px" }}>
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              style={{
                background: "transparent",
                border: `1px solid ${theme.gold}`,
                color: theme.gold,
                padding: "8px 18px",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "0.3s",
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
