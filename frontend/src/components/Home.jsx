import cats from "../data/cats";
import PageHeading from "./PageHeading";
import ProductListnigs from "./ProductListnigs";
import BootstrapButton from "./BootstrapButton";
import Snowfall from "react-snowfall";

export default function Home() {
  const isActive = Math.random() > 0.5;

  return (
    <>
      <Snowfall color="#00ccff" />
      <div className="home-container">
        <div className="container col-6">
          <BootstrapButton text="Submit" type="primary" />
          <BootstrapButton text="Save" type="secondary" />
          <BootstrapButton text="Okay" type="success" />
          <BootstrapButton text="Cancel" type="danger" />
        </div>
        <PageHeading title="Explore Those Cute Cats!">
          Choose the cat and download the picture!
        </PageHeading>
        <ProductListnigs products={cats} />
      </div>
    </>
  );
}
