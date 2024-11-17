import styles from "@/styles/Photo.module.scss";
import Image from "next/image";

type Effect = "invert" | "highlight";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  layout?: string;
  objectFit?: string;
  effect?: Effect;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Photo = ({
  effect = "invert",
  onMouseEnter,
  onMouseLeave,
  ...rest
}: PhotoProps) => {
  const photoClass = `${styles.photo} ${styles[`photo--${effect}`]}`;

  return (
    <div className={photoClass}>
      <Image
        className={styles.photo__img}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...rest}
      />
    </div>
  );
};
