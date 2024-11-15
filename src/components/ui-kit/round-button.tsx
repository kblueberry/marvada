import styles from "@/styles/RoundButton.module.scss";

type Icon = "facebook" | "instagram" | "newsletter" | "contact";

interface RoundButtonProps {
  title?: string;
  icon?: Icon;
}

export const RoundButton = ({ title, icon }: RoundButtonProps) => {
  return (
    <div className={styles.rnd_btn}>
      <div className={styles.rnd_btn__content}>{title}</div>
    </div>
  );
};
