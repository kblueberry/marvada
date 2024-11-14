import styles from "@/styles/Photo.module.scss";
import Image from "next/image";

type Effect = "invert" | "highlight";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  effect?: Effect;
}

export const Photo = ({
  src,
  alt,
  width,
  height,
  effect = "invert",
}: PhotoProps) => {
  const photoClass = `${styles.photo} styles[photo--${effect}]`;

  return (
    <div className={photoClass}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.photo__img}
      />
    </div>
  );
};
