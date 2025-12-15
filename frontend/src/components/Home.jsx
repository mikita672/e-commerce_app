import cats from "../data/cats";
import PageHeading from "./PageHeading";
import ProductListnigs from "./ProductListnigs";
import EasyButton from "./EasyButton";

export default function Home() {
  const isActive = Math.random() > 0.5;

  return (
    <>
      <div className="home-container">
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListnigs products={cats} />
      </div>
    </>
  );
}
