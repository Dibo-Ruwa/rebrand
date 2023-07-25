"use client";
import { useCallback, useState } from "react";
import CategorySlide from "../CategorySlide/CategorySlides";
import { Container, ProductListing, Title } from "./productList.styles";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../ui/button/Button";

const products = [
  {
    id: "product1",
    title: "Product 1",
    price: 29.99,
    imgUrl: "https://example.com/product1.jpg",
    category: "Electronics",
  },
  {
    id:"product2",
    title: "Product 2",
    price: 49.99,
    imgUrl: "https://example.com/product2.jpg",
    category: "Clothing",
  },
  {
    id: "product3",
    title: "Product 3",
    price: 14.99,
    imgUrl: "https://example.com/product3.jpg",
    category: "Home & Kitchen",
  },
  {
    id: "product4",
    title: "Banana",
    price: 0.99,
    imgUrl: "https://example.com/banana.jpg",
    category: "Fruits",
  },
  {
    id: "product5",
    title: "Chocolate Bar",
    price: 2.49,
    imgUrl: "https://example.com/chocolate.jpg",
    category: "Snacks",
  },
  {
    id: "product6",
    title: "Cereal",
    price: 3.99,
    imgUrl: "https://example.com/cereal.jpg",
    category: "Breakfast",
  },
  {
    id: "product7",
    title: "Yogurt",
    price: 1.25,
    imgUrl: "https://example.com/yogurt.jpg",
    category: "Dairy",
  },
  {
    id: "product8",
    title: "Headphones",
    price: 59.99,
    imgUrl: "https://example.com/headphones.jpg",
    category: "Electronics",
  },
  {
    id:"product9",
    title: "T-Shirt",
    price: 19.99,
    imgUrl: "https://example.com/tshirt.jpg",
    category: "Clothing",
  },
  {
    id: "product10",
    title: "Toaster",
    price: 34.99,
    imgUrl: "https://example.com/toaster.jpg",
    category: "Home & Kitchen",
  },
  {
    id: "product11",
    title: "Apple",
    price: 1.49,
    imgUrl: "https://example.com/apple.jpg",
    category: "Fruits",
  },
  {
    id: "product12",
    title: "Chips",
    price: 1.99,
    imgUrl: "https://example.com/chips.jpg",
    category: "hijikjikjnkl",
  },
  {
    id: "product13",
    title: "Milk",
    price: 2.75,
    imgUrl: "https://example.com/milk.jpg",
    category: "sssss",
  },
];

const categories: string[] = Array.from(
  new Set(products.map((product) => product.category))
);

const ProductList = () => {
  const initialProductsToShow = 4; // Adjust the initial number of products to display
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0]
  );
  const [productsToShow, setProductsToShow] = useState<number>(
    initialProductsToShow
  );

  const handleCategorySelection = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      setProductsToShow(initialProductsToShow);
    },
    [initialProductsToShow]
  );

 
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleViewMore = () => {
    setProductsToShow(
      (prevProductsToShow) => prevProductsToShow + initialProductsToShow
    );
  };
  return (
    <Container>
      <Title>Current Menu</Title>
      <CategorySlide
        categories={categories}
        onCategorySelect={handleCategorySelection}
      />
      <ProductListing>
        {filteredProducts.slice(0, productsToShow).map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ProductListing>
      {productsToShow < filteredProducts.length && (
        <Button size="large" color="primary" onClick={handleViewMore}>
          Get Started
        </Button>
      )}
    </Container>
  );
};

export default ProductList;
