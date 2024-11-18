import styles from "../styles/NavBar.module.scss";
import Logo from "./ui-kit/logo";

export const NavBar = () => (
  <div className={styles.navbar}>
    <div className={styles.navbar__wrap}>
      <Logo />
      <div className={styles.navbar__menu}>Menu</div>
    </div>
  </div>
);
