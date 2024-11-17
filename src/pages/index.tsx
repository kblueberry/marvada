import Hero from "@/components/hero";
import { Slider } from "@/components/slider";
import { Footer } from "@/components/footer";
import Artist from "@/components/artist";
import MusicAnnouncements from "@/components/music-announcements";
import RelatedContent from "@/components/related-content";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Artist />
      <MusicAnnouncements />
      <Slider />
      <RelatedContent />
      <Footer />
    </main>
  );
}
