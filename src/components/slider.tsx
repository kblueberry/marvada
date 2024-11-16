import { Photo } from "./ui-kit/photo";
import { Carousel } from "nuka-carousel";

export const Slider = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel>
        <div style={{ minWidth: "800px" }}>
          <Photo
            src="/img/VARNA_SHOOT_1_scaled.jpg"
            alt="Varna shoot picture"
            width={800}
            height={1067}
          />
        </div>
        <div style={{ minWidth: "800px" }}>
          <Photo
            src="/img/VARNA_SHOOT_2_scaled.jpg"
            alt="Varna shoot picture"
            width={800}
            height={683}
          />
        </div>
        <div style={{ minWidth: "800px" }}>
          <Photo
            src="/img/VARNA_SHOOT_3_scaled.jpg"
            alt="Varna shoot picture"
            width={800}
            height={946}
          />
        </div>
        <div style={{ minWidth: "800px" }}>
          <Photo
            src="/img/VARNA_SHOOT_4_scaled.jpg"
            alt="Varna shoot picture"
            width={800}
            height={1067}
          />
        </div>
        <div style={{ minWidth: "800px" }}>
          <Photo
            src="/img/VARNA_SHOOT_5_scaled.jpg"
            alt="Varna shoot picture"
            width={800}
            height={739}
          />
        </div>
        <div style={{ minWidth: "920px" }}>
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
};
