import Image from "next/image";
import { NavBar } from "@/components/navbar";
import styles from "@/styles/Hero.module.scss";
import { Photo } from "./ui-kit/photo";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <NavBar />

      <Photo
        src="/img/hero.webp"
        alt="Hero image"
        layout="responsive"
        width={1920}
        height={1080}
        objectFit="cover"
      />

      <h1 className={styles.hero__title}>VARNA GL</h1>
    </section>
  );
};

export default Hero;