import Photo from "./ui-kit/photo";
import { Carousel } from "nuka-carousel";
import styles from "@/styles/Slider.module.scss";

export const Slider = () => (
  <div className={styles.slider}>
    <Carousel>
      <div className={styles.slider__item}>
        <Photo
          src="/img/VARNA_SHOOT_1_scaled.jpg"
          alt="Varna shoot picture"
          width={800}
          height={1067}
        />
      </div>
      <div className={styles.slider__item}>
        <Photo
          src="/img/VARNA_SHOOT_2_scaled.jpg"
          alt="Varna shoot picture"
          width={800}
          height={683}
        />
      </div>
      <div className={styles.slider__item}>
        <Photo
          src="/img/VARNA_SHOOT_3_scaled.jpg"
          alt="Varna shoot picture"
          width={800}
          height={946}
        />
      </div>
      <div className={styles.slider__item}>
        <Photo
          src="/img/VARNA_SHOOT_4_scaled.jpg"
          alt="Varna shoot picture"
          width={800}
          height={1067}
        />
      </div>
      <div className={styles.slider__item}>
        <Photo
          src="/img/VARNA_SHOOT_5_scaled.jpg"
          alt="Varna shoot picture"
          width={800}
          height={739}
        />
      </div>
      <div className={styles.slider__item}>
        <Photo
          src="/img/VARNA_SHOOT_6_scaled.jpg"
          alt="Varna shoot picture"
          width={920}
          height={946}
        />
      </div>
    </Carousel>
  </div>
);
