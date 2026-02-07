import { useParams } from "react-router-dom";
import products from "../data/products";
import { useEffect, useState } from "react";

export default function Product() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === String(id));
  const [open, setOpen] = useState(false);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!product) return null;

  return (
    <>
      {/* PRODUCT IMAGE */}
      <div
        style={{
          maxWidth: "520px",
          margin: "60px auto 24px",
          cursor: "zoom-in",
        }}
        onClick={() => setOpen(true)}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            borderRadius: "20px",
            objectFit: "cover",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* PRODUCT INFO */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2
          style={{
            fontFamily: "Playfair Display",
            fontSize: "28px",
            marginBottom: "8px",
          }}
        >
          {product.name}
        </h2>

        <p style={{ opacity: 0.65, fontSize: "15px" }}>
          {product.description}
        </p>
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          {/* STOP CLICK PROPAGATION */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              animation: "zoomIn 0.25s ease",
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              style={{
                position: "absolute",
                top: "-14px",
                right: "-14px",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                border: "none",
                background: "#000",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ×
            </button>

            <img
              src={product.image}
              alt={product.name}
              style={{
                maxWidth: "90vw",
                maxHeight: "85vh",
                borderRadius: "18px",
                objectFit: "contain",
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>
      )}

      {/* ZOOM ANIMATION */}
      <style>
        {`
          @keyframes zoomIn {
            from {
              transform: scale(0.9);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
