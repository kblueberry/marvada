import PlatformLinks from "@/components/platform-links";
import AboutArtist from "./about-artist";
import styles from "@/styles/Artist.module.scss";

const Artist = () => (
  <section className={styles.artist}>
    <PlatformLinks />
    <AboutArtist />
  </section>
);

export default Artist;
