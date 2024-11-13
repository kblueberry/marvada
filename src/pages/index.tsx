import Head from "next/head";
import styles from "@/styles/Home.module.scss";
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
        {
          // start hero
        }
        <section
          className={styles.hero}
          style={{
            width: "100%",
          }}
        >
          <div className={styles.fixed_on_top}>
            <div className={styles.top_navbar}>
              <Image
                src="/img/marvada-logo.svg"
                alt="logo"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                width={194}
                height={36}
              ></Image>
              <div className={styles.menu}>Menu</div>
            </div>
          </div>

          <Image
            src="/img/hero.webp"
            alt="Hero image"
            layout="responsive"
            width={1920}
            height={1080}
            objectFit="cover"
          />
        </section>
        {
          // end hero
        }
      </main>
    </>
  );
}
