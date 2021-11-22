import React from 'react';
import { ReactComponent as Play } from '../../assets/icons/play.svg';
import { ReactComponent as Pause } from '../../assets/icons/pause.svg';
import { ReactComponent as Next } from '../../assets/icons/next.svg';
import { ReactComponent as Prev } from '../../assets/icons/prev.svg';
import "./AudioControls.scss"

interface AudioControlsProps {
    isPlaying: boolean;
    setPlaying: (newValue: boolean) => void;
    onPrevClick: () => void;
    onNextClick: () => void;
}

export default function AudioControls({
    isPlaying,
    setPlaying,
    onPrevClick,
    onNextClick,
  }: AudioControlsProps){
    return (
        <div className="audio-controls">
            <button
                type="button"
                className="prev"
                aria-label="Previous"
                onClick={onPrevClick}
            >
            <Prev />
            </button>
            {
                isPlaying 
            ? 
                <button
                    type="button"
                    className="pause"
                    onClick={() => setPlaying(false)}
                    aria-label="Pause"
                >
                    <Pause />
                </button>
            : 
                <button
                    type="button"
                    className="play"
                    onClick={() => setPlaying(true)}
                    aria-label="Play"
                >
                    <Play />
                </button>
            }
            <button
                type="button"
                className="next"
                aria-label="Next"
                onClick={onNextClick}
            >
                <Next />
            </button>
        </div>
    )
}
