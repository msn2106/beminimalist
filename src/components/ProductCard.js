import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 813px;
  width: 438px;
  display: block;
  float: none;
  position: absolute;
  font-family: "Apercu Pro Regular";
  font-size: 16px;
  line-height: 24.96px;
`;

const Description = styled.div`
  height: 114px;
  width: 400px;
  display: flex;
  float: none;
  position: static;
  font-family: "Apercu Pro Regular";
  font-size: 16px;
  line-height: 28px;
`;

const ProductCard = ({ product }) => {
  return (
    <Container>
      <img class='image__img lazyautosizes lazyloaded' src={product.image} alt={product.title} />
      <Description>
        <h4 class='product-item__product-title fs-product-title fs-body-bold'>
          <a>{product.title}</a>
        </h4>
        <div data-oke-star-rating='' data-oke-reviews-product-id='shopify-5746593726625' data-oke-rendered=''>
          <div className='class'></div>
          <div class='oke-sr-count'>
            <span for='reviewCount'>{product.noofreviews}</span>
            <span> Reviews </span>
          </div>
        </div>
        <div className='price'>
          <s class='t-subdued'>{product.price}</s>
          <span class='sale'>{product.price}</span>
        </div>
      </Description>
      
    </Container>
  );
};

export default ProductCard;
