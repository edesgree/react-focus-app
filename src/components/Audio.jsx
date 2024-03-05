import React from "react";
import styles from "./Audio.module.scss";

const Audio = ({ name, audioId, file, isAmbiancePlaying }) => {

    //const { isAmbiancePlaying } = React.useContext(PlayPauseContext);

    const [isPlaying, setIsPlaying] = React.useState(null);
    const [volume, setVolume] = React.useState(.5);

    const audioRef = React.useRef(null);


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
    }, [isAmbiancePlaying]); // Run this effect only once after the component mounts


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
        const audioElement = audioRef.current;
        setVolume(e.target.value);
        // change volume of current audio element
        if (audioElement) {
            audioElement.volume = e.target.value;
        }

    };

    const sliderVolumeMaxRange = 1;
    const getSliderVolumeBackgroundSize = () => {
        return { backgroundSize: `${(volume * 100) / sliderVolumeMaxRange}% 100%` };
    };

    return (
        <div id={audioId}>
            <h5>{name}</h5>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <div className={styles.slider}>
                <input
                    type="range"
                    min="0"
                    max={sliderVolumeMaxRange}
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    style={getSliderVolumeBackgroundSize()}
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