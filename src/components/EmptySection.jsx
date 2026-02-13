export default function EmptySection({ title }) {
  return (
    <div
      style={{
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2>{title}</h2>
      <p style={{ marginTop: "20px", opacity: 0.6 }}>
        Products coming soon in this section.
      </p>
    </div>
  );
}
