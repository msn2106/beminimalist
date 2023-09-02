import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div style={{ padding: "2%", flex: "1 16%", border: "1px solid black" }}>
      <img src={product.image} alt={product.title} />
      <div>
        <h4>
          <a>{product.title}</a>
        </h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <div>3.5 stars</div>
          <div>
            <span>{product.noofreviews}</span>
            <span> Reviews </span>
          </div>
        </div>
        <div>
          <span>{product.price}</span>
          <span>{product.price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
