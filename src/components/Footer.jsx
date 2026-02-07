import { WHATSAPP_NUMBER } from "../config";

export default function Footer() {
  const message = encodeURIComponent("Hello, I have a query");

  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "40px 20px",
        borderTop: "1px solid #eee",
        background: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* LEFT */}
        <div>
          <h3 style={{ fontFamily: "Playfair Display", marginBottom: "6px" }}>
            Modern Zewar
          </h3>
          <p style={{ opacity: 0.6, fontSize: "14px" }}>
            Handcrafted modern jewellery for elegance
          </p>
        </div>

        {/* RIGHT */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "12px 22px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "999px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </footer>
  );
}
