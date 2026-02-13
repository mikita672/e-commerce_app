import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import Snowfall from "react-snowfall";
import apiClient from "../api/apiClient";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const products = useLoaderData();
  return (
    <>
      <Snowfall color="#00ccff" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListings />
      </div>
    </>
  );
}

export async function productsLoader() {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    throw new Response(
      error.message || "Failed to fetch products. Please try again.",
      { status: error.status || 500 },
    );
  }
}
