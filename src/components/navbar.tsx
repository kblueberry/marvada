import styles from "../styles/NavBar.module.scss";
import Menu from "./menu";
import Logo from "./logo";

const NavBar = () => (
  <div className={styles.navbar}>
    <div className={styles.navbar__wrap}>
      <Logo />
      <Menu />
    </div>
  </div>
);

export default NavBar;
