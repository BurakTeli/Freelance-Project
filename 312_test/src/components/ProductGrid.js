import React from "react";

const ProductGrid = ({ products }) => {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px",
      padding: "20px"
    }}>
      {products.map((product, index) => (
        <div key={index} style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "8px", textAlign: "center" }}>
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
          <h3>{product.name}</h3>
          <p>{product.price} ₺</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
