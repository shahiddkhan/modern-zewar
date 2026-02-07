import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

function App() {
  const [category, setCategory] = useState("all");

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <>
      <Navbar setCategory={setCategory} />

      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <h1>Modern Women’s Accessories</h1>
        <p>Discover rings, bracelets, chains & luxury pieces.</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          paddingBottom: "60px",
        }}
      >
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
