import styles from "@/styles/NavBar.module.scss";
import Image from "next/image";

const Logo = () => (
  <div className={styles.navbar__logo}>
    <Image
      src="/img/marvada-logo.svg"
      alt="logo"
      width={194}
      height={36}
    ></Image>
  </div>
);

export default Logo;
