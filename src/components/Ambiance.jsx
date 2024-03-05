import React from "react";
import styles from "./Ambiance.module.scss";
import Audio from "./Audio";
//import { usePlayPause } from "./PlayPauseContext";

export default function Ambiance({ name, audios, ambianceId, currentPlayingAmbiance, setCurrentPlayingAmbiance }) {
    //const { isAmbiancePlaying, togglePlayPause } = usePlayPause();
    const [isAmbiancePlaying, setIsAmbiancePlaying] = React.useState(false);
    const togglePlayPause = () => {
        if (currentPlayingAmbiance === ambianceId) {
            setCurrentPlayingAmbiance(null);
        } else {
            setCurrentPlayingAmbiance(ambianceId);
        }
        setIsAmbiancePlaying(prevState => !prevState);
    };
    const audioElements = audios.map((audio, index) => {
        return (
            <Audio
                key={audio.id}
                name={audio.name}
                file={audio.file}
                isAmbiancePlaying={currentPlayingAmbiance === ambianceId}
            />
        );
    });

    return (
        <div title={name}>
            <h3>Ambiance {name}</h3>
            <button onClick={togglePlayPause}>{currentPlayingAmbiance === ambianceId ? 'Pause' : 'Play'}</button>
            <div className={styles.audioList}>
                {audioElements}
            </div>
        </div>
    );
}