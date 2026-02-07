import { useState } from "react";
import { WHATSAPP_NUMBER } from "../config";

export default function ProductCard({ product }) {
  const [previewOpen, setPreviewOpen] = useState(false);

  const message = encodeURIComponent(
    `Hi, I am interested in this product:\n\n${product.name}`
  );

  return (
    <>
      {/* CARD */}
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
          textAlign: "center",
        }}
      >
        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          onClick={() => setPreviewOpen(true)}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "12px",
            cursor: "zoom-in",
          }}
        />

        <h3
          style={{
            margin: "14px 0 6px",
            fontFamily: "Playfair Display",
            fontWeight: 600,
          }}
        >
          {product.name}
        </h3>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "12px",
            padding: "10px 18px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Order on WhatsApp
        </a>
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {previewOpen && (
        <div
          onClick={() => setPreviewOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              maxWidth: "90%",
              maxHeight: "85%",
              borderRadius: "18px",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          />
        </div>
      )}
    </>
  );
}
