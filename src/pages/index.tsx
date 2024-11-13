import Head from "next/head";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Varna GL</title>
        <meta name="description" content="Varna GL personal page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Welcome</h1>
          <p>Lorem ipsum.</p>
          <button className={styles.ctaButton}>Get Started</button>
        </section>
      </main>
    </>
  );
}
