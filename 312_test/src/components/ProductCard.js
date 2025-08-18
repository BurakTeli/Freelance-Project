import React from "react";

const ProductCard = ({ name, price, image, whatsappNumber }) => {
  const handleWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=Merhaba, ${name} ürünü hakkında bilgi almak istiyorum.`;
    window.open(url, "_blank");
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p>{price} ₺</p>
      <button onClick={handleWhatsApp} className="whatsapp-btn">
        WhatsApp’tan Sor
      </button>
    </div>
  );
};

export default ProductCard;
