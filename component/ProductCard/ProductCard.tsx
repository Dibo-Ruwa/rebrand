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
} from "./productCard.styles";
import useCartStore from "@/store/useCart.store";
import { Product } from "@/utils/types/types";
import { toast } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
        {/* <ProductImage src={product.imgUrl} alt="...." /> */}
        <CartOverlay>
          <CartBtn
            onClick={() => {
              if (session) {
                addToCart(product);
                toast.success("item added successfully");
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
