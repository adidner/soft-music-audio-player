
// import imgSrc from "./assets/artwork.jpg";
// import imgSrc2 from "./assets/artwork2.jpg";
// import imgSrc3 from "./assets/artwork3.jpg";
// import cali from "./assets/cali-wataboi.mp3";
// import fifty from "./assets/50-tobylane.mp3";
// import iwonder from "./assets/iwonder-dreamheaven.mp3";

export interface trackDataInterface {
    title: string;
    artist: string;
    audioSrc: string;
    image: string;
}

export const trackData: trackDataInterface[] = [
      {
        title: "Ambient Piano & Strings",
        artist: "ZakharValaha",
        audioSrc: "./track-assets/mp3s/ambient-piano-strings.mp3",
        image: "imgSrc3",
      },
      {
        title: "The Introvert",
        artist: "MichaelKorbin",
        audioSrc: "./track-assets/mp3s/the-introvert.mp3",
        image: "theintrovert",
      },
];