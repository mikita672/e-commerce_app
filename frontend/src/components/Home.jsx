import products from "../data/cats";
import cats from "../data/cats";
import PageHeading from "./PageHeading";
import ProductListnigs from "./ProductListnigs";

export default function Home() {
  return (
    <div className="home-container">
      <PageHeading title="Explore Those Cute Cats!">
        Choose the cat and download the picture!
      </PageHeading>
      <ProductListnigs products={cats} />
    </div>
  );
}
