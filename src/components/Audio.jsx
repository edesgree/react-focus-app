import React from "react";
import styles from "./Audio.module.scss";
import { getInputRangeBackgroundSize } from "./utils/utils";
const Audio = ({ name, audioId, icon, file, isAmbiancePlaying, ambianceVolume }) => {

    //const { isAmbiancePlaying } = React.useContext(PlayPauseContext);

    const [isPlaying, setIsPlaying] = React.useState(null);
    const [volume, setVolume] = React.useState(.5);

    const audioRef = React.useRef(null);
    const sliderVolumeMaxRange = 1;

    React.useEffect(() => {
        const audioElement = audioRef.current;
        // Ensure that the audio element is paused when the component mounts
        if (audioElement) {
            if (isAmbiancePlaying) {
                audioElement.play();
                setIsPlaying(true);
            } else {
                audioElement.pause();
                setIsPlaying(false);
            }
        }
        console.log('isAmbiancePlaying in audio', isAmbiancePlaying);
    }, [isAmbiancePlaying]);

    React.useEffect(() => {
        setVolumeFn(ambianceVolume);
    }, [ambianceVolume]);

    const setVolumeFn = (value) => {
        const audioElement = audioRef.current;
        setVolume(value);
        // change volume of current audio element
        if (audioElement) {
            audioElement.volume = volume;
        }
    };
    const togglePlay = () => {
        const audioElement = audioRef.current;
        if (audioElement?.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
        setIsPlaying(prevState => !prevState);
        console.log(file); // Log file
    };

    const handleVolumeChange = (e) => {
        setVolumeFn(e.target.value);

    };



    return (
        <div id={audioId}>
            <h2>{name}{icon}</h2>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <div className={styles.slider}>
                <input
                    type="range"
                    min="0"
                    max={sliderVolumeMaxRange}
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={getInputRangeBackgroundSize(volume, sliderVolumeMaxRange)}
                    disabled={!isPlaying}
                />
            </div>

            <audio ref={audioRef} controls={false} loop>
                <source src={file} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

        </div>
    );
};

export default Audio;