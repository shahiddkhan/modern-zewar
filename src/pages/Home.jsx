import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import EmptySection from "../components/EmptySection";
import products from "../data/products";

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
          padding: "40px 15px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontSize: "clamp(28px, 5vw, 42px)",
              marginBottom: "15px",
              color: "#722F37",
            }}
          >
            Modern Women’s Accessories
          </h1>

          <p
            style={{
              textAlign: "center",
              marginBottom: "50px",
              color: "#722F37",
              opacity: 0.8,
            }}
          >
            Discover premium handcrafted jewelry crafted for elegance.
          </p>

          {filtered.length === 0 ? (
            <EmptySection title={category.toUpperCase()} />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "25px",
              }}
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
