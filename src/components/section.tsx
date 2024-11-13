import { ReactNode } from "react";
import styles from "../styles/Section.module.scss";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section
      className={styles.section}
      style={{
        width: "100%",
      }}
    >
      {children}
    </section>
  );
};
