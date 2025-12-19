import cats from "../data/cats";
import PageHeading from "./PageHeading";
import ProductListnigs from "./ProductListnigs";
import Snowfall from "react-snowfall";

export default function Home() {
  const isActive = Math.random() > 0.5;

  return (
    <>
      <Snowfall color="#00ccff" />
      <div className="home-container">
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListnigs products={cats} />
      </div>
    </>
  );
}
