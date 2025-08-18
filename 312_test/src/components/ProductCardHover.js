import React from "react";

const ProductCardHover = ({ name, price, image, whatsappNumber }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=Merhaba, ${name} hakkında bilgi almak istiyorum.`;
    window.open(url, "_blank");
  };

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      overflow: "hidden",
      width: "220px",
      margin: "15px",
      transition: "transform 0.3s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
      
      <img src={image} alt={name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <div style={{ padding: "15px", textAlign: "center" }}>
        <h3>{name}</h3>
        <p>{price} ₺</p>
        <button 
          onClick={handleWhatsApp} 
          style={{
            background: "#25D366", 
            color: "white", 
            padding: "8px 12px", 
            border: "none", 
            borderRadius: "5px",
            cursor: "pointer"
          }}>
          WhatsApp’tan Sor
        </button>
      </div>
    </div>
  );
};

export default ProductCardHover;
