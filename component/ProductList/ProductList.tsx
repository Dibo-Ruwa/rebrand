"use client";
import { useCallback, useState } from "react";
import CategorySlide from "../CategorySlide/CategorySlides";
import { Container, ProductListing, Title } from "./productList.styles";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../ui/button/Button";
import { Product } from "@/utils/types/types";

const products: Product[] = [
  {
    id: "1",
    title: "Jolof rice",
    price: 1329,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
    category: "Rice and Grains",
  },
  {
    id: "2",
    title: "Jolof rice",
    price: 1329,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
    category: "Rice and Grains",
  },
  {
    id: "3",
    title: "Ofada rice",
    price: 1329,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931036/diboruwa/Screenshot_from_2023-07-23_12-43-31_fachft.png",
    category: "Rice and Grains",
  },
  {
    id: "4",
    title: "Masa",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930984/diboruwa/Screenshot_from_2023-07-23_12-25-21_hc8kbh.png",
    category: "Swallow",
  },
  {
    id: "4",
    title: "Beans, Bread and Plantain",
    price: 14.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-22_vzskcj.png",
    category: "Beans",
  },
  {
    id: "5",
    title: "Banana",
    price: 0.99,
    imgUrl: "https://example.com/banana.jpg",
    category: "Fruits",
  },
  {
    id: "6",
    title: "Chocolate Bar",
    price: 2.49,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938468/diboruwa/Screenshot_from_2023-08-13_15-52-34_fofcpm.png",
    category: "Snacks",
  },
  {
    id: "7",
    title: "Custard and Akara",
    price: 3.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931043/diboruwa/Screenshot_from_2023-07-23_12-51-05_kt11tb.png",
    category: "Breakfast",
  },
  // {
  //   id: "8",
  //   title: "Yogurt",
  //   price: 1.25,
  //   imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691930939/diboruwa/Screenshot_from_2023-07-23_12-41-36_gqry1k.png",
  //   category: "Dairy",
  // },
  {
    id: "9",
    title: "Rice and Seafood",
    price: 19.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931367/diboruwa/thai-food-shrimp-squid-fried-cooked-with-long-beans-rice_acmjpp.jpg",
    category: "Rice and Grains",
  },
  {
    id: "10",
    title: "Toaster",
    price: 34.99,
    imgUrl: "https://example.com/toaster.jpg",
    category: "Rice and Grains",
  },
  {
    id: "11",
    title: "Apple",
    price: 1.49,
    imgUrl: "https://example.com/apple.jpg",
    category: "Fruits",
  },
  {
    id: "12",
    title: "Pap and Beans Cake (Kunu and Kose)",
    price: 1.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691931001/diboruwa/Screenshot_from_2023-07-23_12-48-37_aeja1o.png",
    category: "Breakfast",
  },
  {
    id: "13",
    title: "Milk",
    price: 2.75,
    imgUrl: "https://example.com/milk.jpg",
    category: "Rice and Grains",
  },
  {
    id: "14",
    title: "Tuwo and Egusi",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936446/diboruwa/Screenshot_from_2023-07-23_12-24-59_w5xtrh.png",
    category: "Swallow",
  },
  {
    id: "15",
    title: "Tuwo da Miya",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936460/diboruwa/Screenshot_from_2023-07-23_12-11-27_bvdnwl.png",
    category: "Swallow",
  },
  {
    id: "16",
    title: "Efo riro",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936467/diboruwa/Screenshot_from_2023-07-23_12-07-34_f2ue5j.png",
    category: "Soup",
  },
  {
    id: "17",
    title: "Efo riro",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938479/diboruwa/Screenshot_from_2023-08-13_15-53-36_juo2h5.png",
    category: "Soup",
  },
  {
    id: "18",
    title: "Efo riro",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938474/diboruwa/Screenshot_from_2023-08-13_15-51-40_qaokht.png",
    category: "Soup",
  },
  {
    id: "19",
    title: "Efo riro",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-57_crohno.png",
    category: "Soup",
  },
  {
    id: "20",
    title: "Dan wake",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691936473/diboruwa/Screenshot_from_2023-07-23_12-10-00_vb6bd5.png",
    category: "Swallow",
  },
  {
    id: "21",
    title: "Beans and Bread (Ewa agonyi)",
    price: 49.99,
    imgUrl: "https://res.cloudinary.com/zeeson-info-tech-and-innovations/image/upload/v1691938465/diboruwa/Screenshot_from_2023-08-13_15-51-22_vzskcj.png",
    category: "Beans",
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
          <div key={product.id}>
            {" "}
            <ProductCard product={product} />
          </div>
        ))}
      </ProductListing>

      <div className="buttonContainer">
         {productsToShow < filteredProducts.length && (
        <Button size="large" color="primary" onClick={handleViewMore} >
          More
        </Button>
      )}
      </div>
     
    </Container>
  );
};

export default ProductList;
