import React from "react";
import { getAudios } from "../utils/api";
import { getInputRangeBackgroundSize } from "../utils/utils";
import styles from "./Ambiance.module.scss";
import Audio from "./Audio";
import PlayPauseButton from "./ui/PlayPauseButton";

export default function Ambiance({ name, icon, ambianceAudiosIds, ambianceId, currentPlayingAmbiance, setCurrentPlayingAmbiance }) {

    const [audios, setAudios] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [AmbianceVolume, setAmbianceVolume] = React.useState(.5);
    const [isAmbiancePlaying, setIsAmbiancePlaying] = React.useState(false);
    const sliderVolumeMaxRange = 1;

    React.useEffect(() => {
        async function loadAudios() {
            setLoading(true);
            try {
                const data = await getAudios();
                // filter audios to corresponding ambiance
                const dataFiltered = data.filter((audio) => ambianceAudiosIds.includes(audio.id));

                setAudios(dataFiltered);
            } catch (err) {
                console.log('error', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadAudios();
        // start playing on first load
        togglePlayPause();
    }, []);


    const togglePlayPause = () => {
        if (currentPlayingAmbiance === ambianceId) {
            setCurrentPlayingAmbiance(null);
            setIsAmbiancePlaying(false);
        } else {
            setCurrentPlayingAmbiance(ambianceId);
            setIsAmbiancePlaying(true);
        }
        console.log('currentPlayingAmbiance', currentPlayingAmbiance);
    };
    const handleAmbianceVolumeChange = (e) => {
        setAmbianceVolume(e.target.value);
        console.log('ambiance volume', AmbianceVolume);
    };
    const audioElements = audios.map((audio) => {
        return (
            <Audio
                key={audio.id}
                name={audio.name}
                file={audio.file}
                icon={audio.emoji}
                isAmbiancePlaying={isAmbiancePlaying}
                ambianceVolume={AmbianceVolume}
            />
        );
    });

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>;
    }
    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
    }
    return (
        <div className={styles.ambiance}>
            <header>
                <h2 className={styles.title}>{name} <span>{icon}</span></h2>
                <div className={styles.controls}>
                    <PlayPauseButton onClickAction={togglePlayPause} initialDisabled={isAmbiancePlaying} title={name} />
                    <input
                        type="range"
                        min="0"
                        max={sliderVolumeMaxRange}
                        step="0.01"
                        value={AmbianceVolume}
                        onChange={handleAmbianceVolumeChange}
                        style={getInputRangeBackgroundSize(AmbianceVolume, sliderVolumeMaxRange)}
                        disabled={!isAmbiancePlaying}
                    />
                </div>

            </header>

            <div className={styles.audioList}>
                {audioElements}
            </div>
        </div>
    );
}