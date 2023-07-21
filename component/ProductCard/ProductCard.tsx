"use client";

import Image from "next/image";
import { FC } from "react";
import { HiShoppingBag } from "react-icons/hi2";
import styled from "styled-components";
import {
  CartBtn,
  CartOverlay,
  Container,
  ImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
} from "./productCard.styles";
import useCartStore from "@/store/useCart.store";

interface Product {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  return (
    <Container>
      <ImageContainer>
        {/* <ProductImage src={product.imgUrl} alt="...." /> */}
        <CartOverlay>
          <CartBtn onClick={() => addToCart(product)}>
            <HiShoppingBag />
          </CartBtn>
        </CartOverlay>
      </ImageContainer>
      <ProductInfo>
        <ProductName>{product?.title}</ProductName>
        <ProductPrice>NGN-{product.price}</ProductPrice>
      </ProductInfo>
    </Container>
  );
};

export default ProductCard;
