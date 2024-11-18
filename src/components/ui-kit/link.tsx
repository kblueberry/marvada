import styles from "@/styles/Link.module.scss";
import NextLink from "next/link";

const Link = () => (
  <NextLink href={"#"} className={styles["link-btn"]}>
    see all
  </NextLink>
);

export default Link;
