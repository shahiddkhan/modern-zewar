function WhatsAppButton({ product }) {
  const phone = "91XXXXXXXXXX"; // CHANGE THIS

  const message = `Hi, I'm interested in ${product}`;

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "block",
        background: "#25D366",
        color: "#fff",
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px",
        marginTop: "12px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      Order on WhatsApp
    </a>
  );
}

export default WhatsAppButton;
