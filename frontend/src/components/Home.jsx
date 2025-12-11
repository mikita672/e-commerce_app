import cats from "../data/cats";
import PageHeading from "./PageHeading";
import ProductListnigs from "./ProductListnigs";
import "./Home.css";

export default function Home() {
  const isActive = Math.random() > 0.5;

  return (
    <>
      <h1
        className={`my-heading ${
          isActive ? "primary-color" : "secondary-color"
        }`}
      >
        Demo of Global CSS Scope from Home
      </h1>
      <div className="home-container">
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListnigs products={cats} />
      </div>
    </>
  );
}
