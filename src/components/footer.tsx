import styles from "@/styles/Footer.module.scss";
import Logo from "./ui-kit/logo";
import { RoundButton } from "./ui-kit/round-button";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <h5 className={styles.footer__subtitle}>creation nucleus</h5>
      <div className={styles.footer__links}>
        <RoundButton icon="facebook" />
        <RoundButton icon="instagram" />
        <RoundButton icon="newsletter" />
        <RoundButton icon="contact" />
      </div>
      <h5 className={styles.footer__subtitle}>
        mission controle - fiskislóð 31C
      </h5>
    </footer>
  );
};
