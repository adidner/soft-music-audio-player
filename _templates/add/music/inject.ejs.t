---
inject: true
to: src/assets/track-data-index.tsx
after: export const trackData: trackDataInterface[] = [
---
      {
        title: "<%= title %>",
        artist: "<%= artist %>",
        audioSrc: "./track-assets/mp3s/<%= h.changeCase.paramCase(title) %>.mp3",
        image: "",
      },