import styles from "@/styles/InteractivePhoto.module.scss";
import { Photo } from "./ui-kit/photo";
import { RoundButton } from "./ui-kit/round-button";
import { useState } from "react";

type Icon = "facebook" | "instagram" | "newsletter" | "contact";

type ButtonPosition = "center" | "bottom_left";

interface InteractivePhotoProps {
  src: string;
  width: number;
  height: number;
  title: string;
  icon?: Icon;
  buttonPosition?: ButtonPosition;
}

export const InteractivePhoto = ({
  src,
  title,
  width,
  height,
  buttonPosition = "center",
}: InteractivePhotoProps) => {
  const [textColor, setTextColor] = useState("white");
  const onMouseEnter = () => setTextColor("black");
  const onMouseLeave = () => setTextColor("white");

  return (
    <div className={styles.interactive_photo}>
      <Photo
        src={src}
        alt="Photo of the artist"
        width={width}
        height={height}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <div className={styles[`interactive_photo__button--${buttonPosition}`]}>
        <RoundButton title={title} color={textColor} />
      </div>
    </div>
  );
};
