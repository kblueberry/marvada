import styles from "../styles/Section.module.scss";
import Image from "next/image";

export const NavBar = () => {
  return (
    <div className={styles.fixed_on_top}>
      <div className={styles.top_navbar}>
        <Image
          src="/img/marvada-logo.svg"
          alt="logo"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={194}
          height={36}
        ></Image>
        <div className={styles.menu}>Menu</div>
      </div>
    </div>
  );
};
