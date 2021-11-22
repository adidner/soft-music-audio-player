import { useEffect, useRef, useState } from "react";

function useAudioPlayer(source: string) {
  const [duration, setDuration] = useState<number>();
  const [curTime, setCurTime] = useState<number>();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>();
  const audio = useRef<HTMLAudioElement>(new Audio(source));

  useEffect(() => {
    // state setters wrappers
    const setAudioData = () => {
      setDuration(audio.current.duration);
      setCurTime(audio.current.currentTime);
    };

    const setAudioTime = () => setCurTime(audio.current.currentTime);

    // DOM listeners: update React state on DOM events
    audio.current.addEventListener("loadeddata", setAudioData);

    audio.current.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audio.current.play() : audio.current.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.current.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audio.current.removeEventListener("loadeddata", setAudioData);
      audio.current.removeEventListener("timeupdate", setAudioTime);
    };
  }, [playing, clickedTime, curTime]);

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  };
}

export default useAudioPlayer;
