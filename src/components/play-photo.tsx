import styles from "@/styles/PlayPhoto.module.scss";
import { Photo } from "./ui-kit/photo";
import { RoundButton } from "./ui-kit/round-button";
import { useState } from "react";

type Icon = "facebook" | "instagram" | "newsletter" | "contact";

interface RoundButtonProps {
  title?: string;
  icon?: Icon;
}

export const PlayPhoto = ({ title, icon }: RoundButtonProps) => {
  const [textColor, setTextColor] = useState("white");
  const onMouseEnter = () => setTextColor("black");
  const onMouseLeave = () => setTextColor("white");

  return (
    <div className={styles.play_photo}>
      <Photo
        src="/img/VarnaGL-play.jpeg"
        alt="Photo of the artist"
        width={939}
        height={507}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className={styles.play_photo__button}>
        <RoundButton title="play" color={textColor} />
      </div>
    </div>
  );
};
