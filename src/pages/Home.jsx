import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { theme } from "../theme";

export default function Home() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      <Navbar setCategory={setCategory} />

      <div
        style={{
          minHeight: "100vh",
          padding: "70px 20px",
          background: "#FFFFFF",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "clamp(34px,5vw,52px)",
              marginBottom: "20px",
              color: "#000",
              fontWeight: "600",
            }}
          >
            Modern Women’s Accessories
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "70px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            Discover rings, bracelets, chains & luxury pieces crafted for elegance.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "35px",
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
