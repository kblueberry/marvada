import PlatformLinks from "@/components/platform-links";
import styles from "@/styles/Artist.module.scss";
import { InteractivePhoto } from "./interactive-photo";
import { Photo } from "./ui-kit/photo";
import SpotifyPlayer from "./spotify-player";
import React from "react";

const SectionText = ({ children }: { children: React.ReactNode }) => (
  <div>
    <p>{children}</p>
  </div>
);

const AboutArtist = () => (
  <section className={styles.artist_about}>
    <SectionText>
      VARNA GL is a drum dancer and performance artist. Varnas art is deeply
      rooted in her ancestral heritage, with her distinct sound world being
      inspired by the traditional East Greenlandic drum dance passed down to her
      from elders of her stem.
    </SectionText>

    <SpotifyPlayer />

    <SectionText>
      Her transdisciplinary approach to exploring traditional material and
      spiritual practices is infused by her multifaceted experiences as a
      contemporary singer-songwriter, experimental composer, actor, social
      researcher and counselor. Varna is the artistic and managing director of
      Qilaat, a cultural organization committed to promoting, preserving, and
      developing the traditional heritage of drum dancing, towards new stages
      and minds. Greenlandic drum dancing was in
    </SectionText>

    <InteractivePhoto
      title="read"
      src="/img/VarnaGL-play.jpeg"
      width={939}
      height={507}
    />

    <SectionText>
      Her transdisciplinary approach to exploring traditional material and
      spiritual practices is infused by her multifaceted experiences as a
      contemporary singer-songwriter, experimental composer, actor, social
      researcher and counselor. Varna is the artistic and managing director of
      Qilaat, a cultural organization committed to promoting, preserving, and
      developing the traditional heritage of drum dancing, towards new stages
      and minds. Greenlandic drum dancing was in 2021 inscribed into UNESCO's
      representative list of the intangible cultural heritage of humanity.
    </SectionText>

    <SectionText>
      Id varius cursus dui integer. Tortor eu leo erat ligula in est amet quis
      donec. Neque varius nunc amet pulvinar. Pellentesque elit duis viverra
      pharetra pellentesque vulputate feugiat ornare.
    </SectionText>

    <Photo
      src="/img/photo2.webp"
      alt="Photo of the artist"
      width={939}
      height={1016}
    />

    <SectionText>
      Facilisis habitant posuere eget amet quam nulla nulla. Urna id id proin
      facilisi nisl.
    </SectionText>

    <SectionText>
      Euismod urna malesuada placerat vitae sed. Turpis ac mattis nunc
      fringilla. Sit vitae urna adipiscing pharetra elementum vel venenatis id
      purus. Arcu tempor arcu amet duis diam sed et vitae. Sagittis dis
      fringilla vestibulum ridiculus consectetur cras tincidunt pulvinar.
      Viverra sit eu diam dolor. Praesent vulputate eget facilisi nibh aliquet
      in pellentesque in quis. Sed egestas gravida commodo convallis nunc libero
      nec. Vitae pharetra amet aliquet nulla nulla aenean nunc. Accumsan dolor
      sodales ornare dictum. Praesent sed volutpat et nulla mauris. Nascetur mi
      ultricies facilisis viverra natoque vitae pharetra id penatibus. Massa sed
      faucibus fermentum euismod consectetur in. Etiam vitae commodo posuere
      commodo. Elit odio cum sed dignissim velit magna a nunc.
    </SectionText>
  </section>
);

export default AboutArtist;
