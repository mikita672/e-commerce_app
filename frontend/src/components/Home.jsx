import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import Snowfall from "react-snowfall";
import apiClient from "../api/apiClient";
import { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await apiClient.get("/products");
      setProducts(response.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch products. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl text-red-500">Error: {error}</span>
      </div>
    );
  }

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
