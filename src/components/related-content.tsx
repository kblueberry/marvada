import styles from "@/styles/RelatedContent.module.scss";
import Photo from "./ui-kit/photo";
import { Link } from "@/components/ui-kit/link";
import { InteractivePhoto } from "./interactive-photo";

const RelatedContent = () => (
  <div className={styles.related_content}>
    <div className={styles.related_content__top}>
      <h1 className={styles.related_content__top__title}>related content</h1>
      <Link />
    </div>
    <div className={styles.related_content__news}>
      <div className={styles.related_content__news__item}>
        <Photo
          src="/img/related_content_scaled_1.jpg"
          alt="Related content"
          width={522}
          height={522}
        ></Photo>
        <p>Risus facilisi dui pellen tesque scelerisque quam scelerisque.</p>
      </div>

      <div className={styles.related_content__news__item}>
        <Photo
          src="/img/related_content_scaled_2.jpg"
          alt="Related content"
          width={522}
          height={522}
        ></Photo>
        <p>Diam platea metus sollicitudin faucibus</p>
      </div>

      <div className={styles.related_content__news__item}>
        <InteractivePhoto
          title="read"
          src="/img/related_content_scaled_3.jpg"
          buttonPosition="bottom_left"
          width={522}
          height={390}
        />
        <p>
          Cibus purus nunc nam id eget. Elit massa suspendisse elementum purus
          nulla risus.
        </p>
      </div>
    </div>
  </div>
);

export default RelatedContent;
