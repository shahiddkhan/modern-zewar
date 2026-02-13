import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "15px",
        boxShadow: hover
          ? "0 20px 50px rgba(114,47,55,0.3)"
          : "0 10px 30px rgba(114,47,55,0.15)",
        textAlign: "center",
        cursor: "pointer",
        transform: hover ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          overflow: "hidden",
          borderRadius: "14px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "230px",
            objectFit: "cover",
            transform: hover ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>

      <h3
        style={{
          marginTop: "15px",
          color: "#722F37",
        }}
      >
        {product.name}
      </h3>
    </div>
  );
}
