import { NavBar } from "@/components/navbar";
import { Paragraph } from "@/components/paragraph";
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
              frameBorder="0"
              allowFullScreen="true"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>

          <div>
            <p>{SectionText[1]}</p>
          </div>

          <img src=""></img>
        </section>
      </main>
    </>
  );
}
