"use client";
import { FC } from "react";
import { HiShoppingBag } from "react-icons/hi2";
import {
  CartBtn,
  CartOverlay,
  Container,
  ImageContainer,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductImage
} from "./productCard.styles";
import useCartStore from "@/store/useCart.store";
import { Product } from "@/utils/types/types";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const { addToCart } = useCartStore();
  return (
    <Container>
      <ImageContainer>
        {/* <ProductImage src={product.imgUrl} alt="...." style={{ width: "100%" }} /> */}
        <Image src={product?.imgUrl} alt=".." fill={true} />
        <CartOverlay>
          <CartBtn
            onClick={() => {
              if (session) {
                addToCart(product);
              } else {
                router.push("signin");
                toast("please sign in to add item to cart");
              }
            }}
          >
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
