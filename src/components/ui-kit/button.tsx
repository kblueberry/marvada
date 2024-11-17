import styles from "@/styles/Button.module.scss";

export const Button = ({ title }: { title: string }) => (
  <div className={styles.button}>
    <p>{title}</p>
  </div>
);
