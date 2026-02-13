import { useState, useEffect } from "react";

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
    { key: "ring", label: "Rings" },
    { key: "bracelet", label: "Bracelet" },
    { key: "neckpiece", label: "Neckpiece" },
    { key: "bangles", label: "Bangles" },
    { key: "earring", label: "Earring" },
    { key: "handchain", label: "Hand Chain" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#722F37",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            color: "#EFDFBB",
            margin: 0,
            cursor: "pointer",
          }}
          onClick={() => setCategory("all")}
        >
          Modern Zewar
        </h2>

        {/* Desktop Menu */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "14px" }}>
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                style={{
                  background: "transparent",
                  border: "1px solid #EFDFBB",
                  color: "#EFDFBB",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(true)}
            style={{
              fontSize: "26px",
              color: "#EFDFBB",
              cursor: "pointer",
            }}
          >
            ☰
          </div>
        )}
      </div>

      {/* BACKDROP */}
      {menuOpen && isMobile && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 1500,
          }}
        />
      )}

      {/* SLIDE MENU */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: menuOpen ? "0" : "-100%",
            height: "100vh",
            width: "80%",
            maxWidth: "300px",
            background: "#722F37",
            transition: "0.3s ease",
            padding: "40px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            zIndex: 2000,
          }}
        >
          {/* Close Button */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              alignSelf: "flex-end",
              fontSize: "22px",
              color: "#EFDFBB",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            ✕
          </div>

          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => {
                setCategory(c.key);
                setMenuOpen(false);
              }}
              style={{
                background: "transparent",
                border: "1px solid #EFDFBB",
                color: "#EFDFBB",
                padding: "10px",
                borderRadius: "999px",
                cursor: "pointer",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
