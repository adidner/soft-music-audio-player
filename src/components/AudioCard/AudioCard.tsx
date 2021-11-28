import React, { useState, useEffect, useRef } from 'react';
import { trackDataInterface } from "../../assets/track-data-index";
import useAudioPlayer from '../../hooks/useAudioPlayer';
import "./AudioCard.scss";
import AudioControls from '../AudioControls/AudioControls';
import * as moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import Backdrop from '../Backdrop/Backdrop';
momentDurationFormatSetup(moment);

type AudioPlayerProps = {
    tracks: trackDataInterface[];
};


function formatDuration(duration: number) {
    return moment
    .duration(duration, "seconds")
    .format("mm:ss", { trim: false });
}


const AudioPlayer = ({ tracks }: AudioPlayerProps) => {
    // State
    const [trackIndex, setTrackIndex] = useState(0);

	const { title, artist, image, audioSrc } = tracks[trackIndex]; 

    // const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer("https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3#fromHistory");
    const { curTime, duration, playing, setPlaying, setClickedTime, audioRef } = useAudioPlayer(audioSrc);
    
    audioRef.current.addEventListener('ended',function(){
        toNextTrack();
    });


    
    

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(tracks.length - 1);
        } 
        else {
            setTrackIndex(trackIndex - 1);
        }
    }

    const toNextTrack = () => {
        if (trackIndex < tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } 
        else {
            setTrackIndex(0);
        }
    }

    const currentPercentage = duration ? `${(Number(curTime) / duration) * 100}%` : '0%';
    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
    `;

    return (
		<div className="audio-player">
			<div className="track-info">
			  {/* <img
			    className="artwork"
			    src={image}
			    alt={`track artwork for ${title} by ${artist}`}
			  /> */}
                <h2 className="title">{title}</h2>
                <h3 className="artist">{artist}</h3>
                <AudioControls
                    isPlaying={playing}
                    onNextClick={toNextTrack}
                    onPrevClick={toPrevTrack}
                    setPlaying={setPlaying}
                />
                <input
                    type="range"
                    value={curTime}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="progress"
                    onChange={(e) => setClickedTime(Number(e.target.value))}
                    style={{ background: trackStyling }}
                />
                <div className={"time-display"}>
                    <div>{formatDuration(Number(curTime))}</div>
                    <div>{formatDuration(Number(duration))}</div>
                </div>
			</div>
            <Backdrop
                trackIndex={trackIndex}
                isPlaying={playing}
            />
		</div>
	);
}

export default AudioPlayer;