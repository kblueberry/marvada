import styles from "@/styles/MusicAnnouncements.module.scss";
import { Photo } from "./ui-kit/photo";

const MusicAnnouncements = () => (
  <div className={styles.announcements}>
    <div className={styles.announcements_item}>
      <Photo
        src="/img/VarnaGL-announce-1.webp"
        alt="Varna GL announce 1"
        width={522}
        height={694}
      ></Photo>
      <p>Id feugiat suspendisse lacus facilisi eget nunc sit. Lectus vitae.</p>
    </div>
    <div className={styles.announcements_item}>
      <Photo
        src="/img/VarnaGL-announce-2.webp"
        alt="Varna GL announce 2"
        width={661}
        height={530}
      ></Photo>
      <p>Risus ullamcorper at eu dolor fermentum at. Id.</p>
    </div>
  </div>
);

export default MusicAnnouncements;
