import React, { useEffect } from 'react';

import "./Backdrop.scss"

interface BackdropProps {
  trackIndex: number;
  isPlaying: boolean;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Backdrop = ({
  trackIndex,
  isPlaying,
}: BackdropProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--active-color', getRandomColor());
  }, [trackIndex]);

  return (
    <div className={`color-backdrop ${isPlaying ? 'playing' : 'idle'}`} />
  );
};

export default Backdrop;