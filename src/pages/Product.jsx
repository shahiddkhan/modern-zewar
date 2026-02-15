import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { WHATSAPP_NUMBER } from "../config";
import { theme } from "../theme";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>;
  }

  const goldIds = [16, 17, 19, 20, 21];

  const description = goldIds.includes(product.id)
    ? "Gold Adjustable Ring"
    : "AD Adjustable Ring";

  const productLink = window.location.href;

  const message = encodeURIComponent(
`Hi,

I am interested in this product:

Product: ${product.name}
Description: ${description}
Price: ₹199

Product Link: ${productLink}`
  );

  return (
    <div
      style={{
        background: "#FFFFFF",
        minHeight: "100vh",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "70px",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "20px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
        />

        {/* DETAILS */}
        <div style={{ maxWidth: "520px" }}>
          <h1
            style={{
              fontSize: "38px",
              marginBottom: "18px",
              color: "#000",
              fontWeight: "600",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              marginBottom: "25px",
              fontSize: "18px",
              color: "#555",
            }}
          >
            {description}
          </p>

          <h2
            style={{
              marginBottom: "35px",
              color: theme.gold,
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            ₹199
          </h2>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 32px",
              background: theme.gold,
              color: "#000",
              borderRadius: "30px",
              textDecoration: "none",
              fontWeight: "600",
              marginRight: "15px",
              marginBottom: "15px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#000";
              e.target.style.color = theme.gold;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = theme.gold;
              e.target.style.color = "#000";
            }}
          >
            Order on WhatsApp
          </a>

          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "12px 28px",
              borderRadius: "30px",
              border: `1px solid ${theme.gold}`,
              background: "transparent",
              color: theme.gold,
              cursor: "pointer",
              fontWeight: "500",
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
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
