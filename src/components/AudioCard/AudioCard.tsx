import React, { useState, useEffect, useRef } from 'react';
import { trackDataInterface } from "../../assets/track-assets/track-data-index";
import useAudioPlayer from '../../hooks/useAudioPlayer';
import "./AudioCard.scss";
import AudioControls from '../AudioControls/AudioControls';

type AudioPlayerProps = {
    tracks: trackDataInterface[];
};

const AudioPlayer = ({ tracks }: AudioPlayerProps) => {
    // State
    const [trackIndex, setTrackIndex] = useState(0);

	const { title, artist, color, image, audioSrc } = tracks[trackIndex]; 

    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer(audioSrc);

    const toPrevTrack = () => {
        console.log('TODO go to prev');
    }

    const toNextTrack = () => {
        console.log('TODO go to next');
    }

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
			</div>
		</div>
	);
}

export default AudioPlayer;