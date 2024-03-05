import React from "react";
import { ambianceData, audios } from '../data';
import Ambiance from './Ambiance';

export default function Ambiances({ children }) {
    const [currentPlayingAmbiance, setCurrentPlayingAmbiance] = React.useState(null);
    const ambianceElements = ambianceData.map((ambiance) => {
        const ambianceAudios = ambiance.audiosId.map((audioId) => {
            return audios.find((audio) => audio.id === audioId);
        });
        console.log(ambianceAudios);
        return <Ambiance
            key={ambiance.id}
            ambianceId={ambiance.id}
            name={ambiance.name}
            icon={ambiance.emoji}
            audios={ambianceAudios}
            currentPlayingAmbiance={currentPlayingAmbiance}
            setCurrentPlayingAmbiance={setCurrentPlayingAmbiance}
        />;
    }
    );
    return (
        <div>
            <h2>Ambiances</h2>

            {ambianceElements}
        </div>
    );
}

