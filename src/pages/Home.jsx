import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
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

      {/* HERO */}
      <section
        style={{
          padding: "90px 20px 50px",
          textAlign: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontFamily: "Playfair Display",
            fontSize: "42px",
            marginBottom: "12px",
          }}
        >
          Modern Women’s Accessories
        </h1>

        <p
          style={{
            fontSize: "16px",
            opacity: 0.65,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Discover rings, bracelets, chains & luxury pieces crafted for elegance.
        </p>
      </section>

      {/* PRODUCTS */}
      <section
        style={{
          padding: "0 40px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "36px",
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
