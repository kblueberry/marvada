import styles from "@/styles/Photo.module.scss";
import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Photo = ({ onMouseEnter, onMouseLeave, ...rest }: PhotoProps) => (
  <div className={styles.photo}>
    <Image
      className={styles.photo__img}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    />
  </div>
);

export default Photo;
