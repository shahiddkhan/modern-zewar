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
          padding: "60px 20px",
          background: theme.cream,
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h1
            style={{
              textAlign: "center",
              fontSize: "clamp(32px,5vw,48px)",
              marginBottom: "20px",
              color: theme.maroon,
            }}
          >
            Modern Women's Accessories
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "60px",
              opacity: 0.8,
            }}
          >
            Discover premium handcrafted jewelry crafted for elegance.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
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
