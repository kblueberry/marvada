import { InteractivePhoto } from "@/components/interactive-photo";
import Hero from "@/components/hero";
import { Slider } from "@/components/slider";
import { Link } from "@/components/ui-kit/link";
import { Photo } from "@/components/ui-kit/photo";
import styles from "@/styles/Home.module.scss";
import { Footer } from "@/components/footer";
import AboutArtist from "@/components/about-artist";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <AboutArtist />

      <div className={styles.music_announcements}>
        <div className={styles.announcement}>
          <Photo
            src="/img/VarnaGL-announce-1.webp"
            alt="Varna GL announce 1"
            width={522}
            height={694}
          ></Photo>
          <p>
            Id feugiat suspendisse lacus facilisi eget nunc sit. Lectus vitae.
          </p>
        </div>
        <div className={styles.announcement}>
          <Photo
            src="/img/VarnaGL-announce-2.webp"
            alt="Varna GL announce 2"
            width={661}
            height={530}
          ></Photo>
          <p>Risus ullamcorper at eu dolor fermentum at. Id.</p>
        </div>
      </div>

      <Slider />

      <div className={styles.related_content}>
        <div className={styles.related_content__top}>
          <h1 className={styles.related_content__top__title}>
            related content
          </h1>
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
            <p>
              Risus facilisi dui pellen tesque scelerisque quam scelerisque.
            </p>
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
              Cibus purus nunc nam id eget. Elit massa suspendisse elementum
              purus nulla risus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
