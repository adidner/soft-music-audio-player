
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
    color: string;
}

export const trackData: trackDataInterface[] = [
      // {
      //   title: "Cali",
      //   artist: "Wataboi",
      //   // audioSrc: cali,
      //   // image: imgSrc,
      //   audioSrc: "cali",
      //   image: "imgSrc",
      //   color: "#00aeb0"
      // },
      // {
      //   title: "50",
      //   artist: "tobylane",
      //   // audioSrc: fifty,
      //   // image: imgSrc2,
      //   audioSrc: "fifty",
      //   image: "imgSrc2",
      //   color: "#ffb77a"
      // },
      // {
      //   title: "I Wonder",
      //   artist: "DreamHeaven",
      //   // audioSrc: iwonder,
      //   // image: imgSrc3,
      //   audioSrc: "iwonder",
      //   image: "imgSrc3",
      //   color: "#5f9fff"
      // }
      {
        title: "Ambient Piano & Strings",
        artist: "ZakharValaha",
        audioSrc: "./track-assets/mp3s/ambient-piano-strings.mp3",
        image: "imgSrc3",
        color: "#5f9fff"
      },
      {
        title: "The Introvert",
        artist: "MichaelKorbin",
        audioSrc: "./track-assets/mp3s/the-introvert.mp3",
        image: "theintrovert",
        color: "#ffb77a"
      },
];