import React from "react";

const ProductCardMinimal = ({ name, price, image }) => {
  return (
    <div style={{
      border: "1px solid #eee",
      padding: "10px",
      width: "180px",
      borderRadius: "8px",
      textAlign: "center"
    }}>
      <img src={image} alt={name} style={{ width: "100%", borderRadius: "5px" }} />
      <h4 style={{ margin: "10px 0" }}>{name}</h4>
      <p style={{ color: "gray" }}>{price} ₺</p>
    </div>
  );
};

export default ProductCardMinimal;
