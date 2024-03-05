import React from "react";
import { ambianceData, audios } from '../data';
import Ambiance from './Ambiance';
import styles from "./Ambiances.module.scss";
export default function Ambiances({ children }) {
    const [currentPlayingAmbiance, setCurrentPlayingAmbiance] = React.useState(null);
    const [selectedAmbiance, setSelectedAmbiance] = React.useState(null);
    const ambianceElements = ambianceData.map((ambiance) => {
        const ambianceAudios = ambiance.audiosId.map((audioId) => {
            return audios.find((audio) => audio.id === audioId);
        });
        console.log(ambianceAudios);
        return selectedAmbiance === ambiance.id && (
            <Ambiance
                key={ambiance.id}
                ambianceId={ambiance.id}
                name={ambiance.name}
                icon={ambiance.emoji}
                audios={ambianceAudios}
                currentPlayingAmbiance={currentPlayingAmbiance}
                setCurrentPlayingAmbiance={setCurrentPlayingAmbiance}
            />
        );
    }
    );
    const ambianceMenu = ambianceData.map((ambiance) => {
        return (
            <div
                key={ambiance.id}
                onClick={() => setSelectedAmbiance(ambiance.id)}
            >
                <button className={selectedAmbiance === ambiance.id ? styles.selected : null}>{ambiance.emoji}
                </button>
            </div>
        );
    });
    return (
        <div>
            <h2>Ambiances</h2>
            <nav className={styles.ambiancesList}>
                {ambianceMenu}
            </nav>

            {ambianceElements}
        </div>
    );
}

