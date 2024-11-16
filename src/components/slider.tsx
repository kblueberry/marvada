import { Photo } from "./ui-kit/photo";
import { Carousel } from "nuka-carousel";

export const Slider = () => {
  return (
    <div style={{ width: "100%" }}>
      <Carousel>
        <div style={{ minWidth: "500px" }}>
          <Photo
            src="/img/VarnaGL-announce-1.webp"
            alt="Varna GL announce 1"
            width={522}
            height={694}
          />
        </div>
        <div style={{ minWidth: "500px" }}>
          <Photo
            src="/img/VarnaGL-announce-2.webp"
            alt="Varna GL announce 2"
            width={661}
            height={530}
          />
        </div>
        <div style={{ minWidth: "500px" }}>
          <Photo
            src="/img/VarnaGL-announce-1.webp"
            alt="Varna GL announce 1"
            width={522}
            height={694}
          />
        </div>
        <div style={{ minWidth: "600px" }}>
          <Photo
            src="/img/VarnaGL-announce-2.webp"
            alt="Varna GL announce 2"
            width={661}
            height={530}
          />
        </div>
      </Carousel>
    </div>
  );
};
