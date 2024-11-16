import styles from "@/styles/RoundButton.module.scss";
import Image from "next/image";

type Icon = "facebook" | "instagram" | "newsletter" | "contact";

interface RoundButtonProps {
  title?: string;
  icon?: Icon;
  color?: string;
}

export const RoundButton = ({
  title,
  icon,
  color = "white",
}: RoundButtonProps) => {
  return (
    <div className={styles.rnd_btn}>
      <div className={styles.rnd_btn__content} style={{ color }}>
        {title}
        {!!icon && (
          <Image
            src={`/img/footer-icons/${icon}.svg`}
            alt={icon}
            width="14"
            height="14"
          />
        )}
      </div>
    </div>
  );
};
