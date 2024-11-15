import styles from "@/styles/Photo.module.scss";
import { Photo } from "./ui-kit/photo";
import { RoundButton } from "./ui-kit/round-button";

type Icon = "facebook" | "instagram" | "newsletter" | "contact";

interface RoundButtonProps {
  title?: string;
  icon?: Icon;
}

export const PlayPhoto = ({ title, icon }: RoundButtonProps) => {
  return (
    <div className={styles.play_photo}>
      <Photo
        src="/img/VarnaGL-play.jpeg"
        alt="Photo of the artist"
        width={939}
        height={507}
      />
      <div className={styles.play_photo__button}>
        <RoundButton title="play" />
      </div>
    </div>
  );
};
