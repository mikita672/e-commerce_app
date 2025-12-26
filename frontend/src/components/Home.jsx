import cats from "../data/cats";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <>
      <Snowfall color="#00ccff" />
      <div className="max-w-6xl mx-auto px-6 py-8">
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListings products={cats} />
      </div>
    </>
  );
}
