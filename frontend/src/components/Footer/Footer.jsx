import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "./footer.module.css";
import styled from "styled-components";
import EasyButton from "../EasyButton";

const H1 = styled.h1`
  color: #5b21b6;
  text-align: center;
`;

export default function Footer() {
  const isActive = Math.random() > 0.5;

  return (
    <>
      <H1>Demo of Styled Components from Footer</H1>
      <EasyButton>Submit</EasyButton>
      <footer className={styles.footer}>
        Built with
        <FontAwesomeIcon
          icon={faHeart}
          className={styles["footer-icon"]}
          aria-hidden="true"
        />{" "}
        by{" "}
        <a href="https://github.com/mikita672" target="_blank" rel="noreferrer">
          mdzvtt
        </a>
      </footer>
    </>
  );
}
