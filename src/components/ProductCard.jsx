import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { theme } from "../theme";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#FFFFFF",
        borderRadius: "18px",
        padding: "20px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-10px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            transform: hover ? "scale(1.07)" : "scale(1)",
          }}
        />
      </div>

      <h3
        style={{
          marginBottom: "10px",
          color: "#000",
          fontWeight: "600",
        }}
      >
        {product.name}
      </h3>

      <button
        style={{
          background: theme.gold,
          border: "none",
          color: "#000",
          padding: "8px 18px",
          borderRadius: "20px",
          fontWeight: "500",
          cursor: "pointer",
        }}
      >
        Order on WhatsApp
      </button>
    </div>
  );
}
