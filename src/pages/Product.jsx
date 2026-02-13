import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { WHATSAPP_NUMBER } from "../config";

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
        background: "#EFDFBB",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          animation: "fadeIn 0.6s ease",
        }}
      >
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: "480px",
            borderRadius: "24px",
            boxShadow: "0 20px 50px rgba(114,47,55,0.25)",
          }}
        />

        {/* DETAILS */}
        <div style={{ maxWidth: "520px" }}>
          <h1
            style={{
              fontSize: "34px",
              marginBottom: "18px",
              color: "#722F37",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              marginBottom: "25px",
              fontSize: "18px",
              color: "#722F37",
              opacity: 0.85,
            }}
          >
            {description}
          </p>

          <h2
            style={{
              marginBottom: "35px",
              color: "#722F37",
              fontSize: "26px",
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
              padding: "15px 32px",
              background: "#722F37",
              color: "#EFDFBB",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "600",
              marginRight: "15px",
              marginBottom: "15px",
              transition: "0.3s ease",
            }}
          >
            Order on WhatsApp
          </a>

          <button
            onClick={() => navigate(-1)}
            style={{
              padding: "10px 24px",
              borderRadius: "999px",
              border: "1px solid #722F37",
              background: "transparent",
              color: "#722F37",
              cursor: "pointer",
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
