import { NavBar } from "@/components/navbar";
import { Paragraph } from "@/components/paragraph";
import { PlayPhoto } from "@/components/play-photo";
import { Photo } from "@/components/ui-kit/photo";
import { SectionText } from "@/pages/sectionText";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varna GL</title>
        <meta name="description" content="Varna GL personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <NavBar />

          <Image
            src="/img/hero.webp"
            alt="Hero image"
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="cover"
          />

          {/* TODO position title */}
          <h1 className={styles.section_title}>VARNA GL</h1>
        </section>

        <section className={styles.section_70}>
          <button className={styles.go_to_platform_cta}>
            Listen on Spotify
          </button>
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

          <PlayPhoto />

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
      </main>
    </>
  );
}
