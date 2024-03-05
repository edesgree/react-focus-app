import React from "react";
import styles from "./Ambiance.module.scss";
import Audio from "./Audio";
//import { usePlayPause } from "./PlayPauseContext";
import { getInputRangeBackgroundSize } from "./utils/utils";

export default function Ambiance({ name, icon, audios, ambianceId, currentPlayingAmbiance, setCurrentPlayingAmbiance }) {
    //const { isAmbiancePlaying, togglePlayPause } = usePlayPause();
    //const [isAmbiancePlaying, setIsAmbiancePlaying] = React.useState(false);
    const [AmbianceVolume, setAmbianceVolume] = React.useState(.5);
    const sliderVolumeMaxRange = 1;
    const togglePlayPause = () => {
        if (currentPlayingAmbiance === ambianceId) {
            setCurrentPlayingAmbiance(null);
        } else {
            setCurrentPlayingAmbiance(ambianceId);
        }
    };
    const handleAmbianceVolumeChange = (e) => {
        setAmbianceVolume(e.target.value);
        console.log('ambiance volume', AmbianceVolume);
    };
    const audioElements = audios.map((audio, index) => {
        return (
            <Audio
                key={audio.id}
                name={audio.name}
                file={audio.file}
                icon={audio.emoji}
                isAmbiancePlaying={currentPlayingAmbiance === ambianceId}
                ambianceVolume={AmbianceVolume}
            />
        );
    });

    return (
        <div title={name}>
            <h2>Ambiance {name} {icon}</h2>
            <button onClick={togglePlayPause}>{currentPlayingAmbiance === ambianceId ? 'Pause' : 'Play'}</button>
            <input
                type="range"
                min="0"
                max={sliderVolumeMaxRange}
                step="0.01"
                value={AmbianceVolume}
                onChange={handleAmbianceVolumeChange}
                style={getInputRangeBackgroundSize(AmbianceVolume, sliderVolumeMaxRange)}
                disabled={currentPlayingAmbiance !== ambianceId}
            />
            <div className={styles.audioList}>
                {audioElements}
            </div>
        </div>
    );
}