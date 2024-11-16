import styles from "@/styles/Button.module.scss";

export const Button = ({ title }: { title: string }) => {
  return (
    <div className={styles.button}>
      <p>{title}</p>
    </div>
  );
};
