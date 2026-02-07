export default function Navbar({ setCategory }) {
  const categories = [
    { key: "all", label: "All" },
    { key: "ring", label: "Ring" },
    { key: "bracelet", label: "Bracelet" },
    { key: "hand-chain", label: "Hand Chain" },
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "linear-gradient(90deg, #000, #111)",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#C9A24D", margin: 0 }}>Modern Zewar</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setCategory(c.key)}
            style={{
              background: "transparent",
              border: "1px solid #C9A24D",
              color: "#C9A24D",
              padding: "6px 14px",
              borderRadius: "999px",
              cursor: "pointer",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
