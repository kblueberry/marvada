import { InteractivePhoto } from "@/components/interactive-photo";
import Hero from "@/components/hero";
import { Slider } from "@/components/slider";
import { Link } from "@/components/ui-kit/link";
import { Photo } from "@/components/ui-kit/photo";
import { SectionText } from "@/pages/sectionText";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui-kit/button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varna GL</title>
        <meta name="description" content="Varna GL personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <section className={styles.section_70}>
          <Button title="Listen on Spotify" />
          <Button title="Listen on Tidal" />
          <Button title="LinkTree" />
          <div>
            <p>{SectionText[0]}</p>
          </div>

          <div>
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/5kOsais9l71Nl3FBn8t08H?utm_source=generator"
              width="100%"
              height="232"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div>
            <p>{SectionText[1]}</p>
          </div>

          <InteractivePhoto
            title="read"
            src="/img/VarnaGL-play.jpeg"
            width={939}
            height={507}
          />

          <div>
            <p>{SectionText[2]}</p>
          </div>

          <div>
            <p>{SectionText[3]}</p>
          </div>

          <Photo
            src="/img/photo2.webp"
            alt="Photo of the artist"
            width={939}
            height={1016}
          />

          <div>
            <p>{SectionText[4]}</p>
          </div>

          <div>
            <p>{SectionText[5]}</p>
          </div>
        </section>

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
    </>
  );
}
