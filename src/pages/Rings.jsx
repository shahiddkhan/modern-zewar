import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Rings() {
  const [selectedType, setSelectedType] = useState(null);

  const ringProducts = products.filter((p) => p.category === "ring");

  const filtered =
    selectedType === null
      ? []
      : ringProducts.filter((p) => p.type === selectedType);

  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <h1>Rings Collection</h1>

      {selectedType === null && (
        <div style={{ display: "flex", gap: "40px", justifyContent: "center", marginTop: "40px" }}>
          <div
            onClick={() => setSelectedType("ad")}
            style={{
              padding: "50px",
              border: "2px solid gold",
              borderRadius: "12px",
              cursor: "pointer",
              minWidth: "250px"
            }}
          >
            <h2>AD Rings</h2>
            <p>{ringProducts.filter(p => p.type === "ad").length} Rings</p>
          </div>

          <div
            onClick={() => setSelectedType("adjustable")}
            style={{
              padding: "50px",
              border: "2px solid gold",
              borderRadius: "12px",
              cursor: "pointer",
              minWidth: "250px"
            }}
          >
            <h2>Adjustable Rings</h2>
            <p>{ringProducts.filter(p => p.type === "adjustable").length} Rings</p>
          </div>
        </div>
      )}

      {selectedType !== null && (
        <>
          <button
            onClick={() => setSelectedType(null)}
            style={{ margin: "20px 0" }}
          >
            Back
          </button>

          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
