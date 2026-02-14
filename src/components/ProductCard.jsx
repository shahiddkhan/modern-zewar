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
        background: theme.softWhite,
        borderRadius: "20px",
        padding: "20px",
        boxShadow: theme.shadow,
        textAlign: "center",
        cursor: "pointer",
        transition: "0.3s",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            transition: "0.4s",
            transform: hover ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      <h3
        style={{
          marginTop: "15px",
          color: theme.maroon,
          fontWeight: "600",
        }}
      >
        {product.name}
      </h3>
    </div>
  );
}
