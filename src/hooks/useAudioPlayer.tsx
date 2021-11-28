import { useEffect, useRef, useState } from "react";

function useAudioPlayer(source: string) {
  const [duration, setDuration] = useState<number>();
  const [curTime, setCurTime] = useState<number>();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>();
  
  const audioRef = useRef<HTMLAudioElement>(new Audio(source));

  useEffect(() => {

    // state setters wrappers
    const setAudioData = () => {
      setDuration(audioRef.current.duration);
      setCurTime(audioRef.current.currentTime);
    };

    const setAudioTime = () => setCurTime(audioRef.current.currentTime);

    // DOM listeners: update React state on DOM events
    audioRef.current.addEventListener("loadeddata", setAudioData);

    audioRef.current.addEventListener("timeupdate", setAudioTime);

    // React state listeners: update DOM on React state changes
    playing ? audioRef.current.play() : audioRef.current.pause();

    if (clickedTime && clickedTime !== curTime) {
      audioRef.current.currentTime = clickedTime;
      setClickedTime(null);
    }

    // effect cleanup
    return () => {
      audioRef.current.removeEventListener("loadeddata", setAudioData);
      audioRef.current.removeEventListener("timeupdate", setAudioTime);
    };
  }, [playing, clickedTime, curTime]);

  useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(source);
      audioRef.current.play();
      setPlaying(true);
  },[source])

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    audioRef
  };
}

export default useAudioPlayer;
