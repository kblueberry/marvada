import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import { Section } from "@/components/section";
import { NavBar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varna GL</title>
        <meta name="description" content="Varna GL personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Section>
          <NavBar />

          <Image
            src="/img/hero.webp"
            alt="Hero image"
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="cover"
          />
        </Section>
      </main>
    </>
  );
}
