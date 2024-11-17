import styles from "@/styles/Artist.module.scss";
import { Button } from "@/components/ui-kit/button";

const PlatformLinks = () => (
  <div className={styles.artist__platforms}>
    <Button title="Listen on Spotify" />
    <Button title="Listen on Tidal" />
    <Button title="LinkTree" />
  </div>
);

export default PlatformLinks;
