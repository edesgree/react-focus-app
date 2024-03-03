import React from "react";
import styles from "./Audio.module.scss";

export default function Audio({ name, audioId, file }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume, setVolume] = React.useState(.5);
    const audioRef = React.useRef(null);
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        console.log(file);
    };
    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
    };


    const MAX = 1;
    const getBackgroundSize = () => {
        return { backgroundSize: `${(volume * 100) / MAX}% 100%` };
    };

    return (
        <div id={audioId}>
            <h5>{name}</h5>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <div className={styles.slider}>
                <input
                    type="range"
                    min="0"
                    max={MAX}
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={getBackgroundSize()}
                    disabled={!isPlaying}
                />
            </div>

            <audio ref={audioRef} controls={false} loop>
                <source src={file} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

        </div>
    );
}

