import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import Snowfall from "react-snowfall";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await apiClient.get("/products");
    setProducts(response.data);
  };

  return (
    <>
      <Snowfall color="#00ccff" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListings products={products} />
      </div>
    </>
  );
}
