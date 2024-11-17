import styles from "../styles/NavBar.module.scss";
import Image from "next/image";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__wrap}>
        <Image
          src="/img/marvada-logo.svg"
          alt="logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={194}
          height={36}
        ></Image>
        <div className={styles.navbar__menu}>Menu</div>
      </div>
    </div>
  );
};
