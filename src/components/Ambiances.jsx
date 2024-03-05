import React from "react";
import { getAmbiances } from "../utils/api";
import Ambiance from './Ambiance';
import styles from "./Ambiances.module.scss";
export default function Ambiances({ children }) {
    const [currentPlayingAmbiance, setCurrentPlayingAmbiance] = React.useState(null);
    const [selectedAmbiance, setSelectedAmbiance] = React.useState(null);
    const [ambianceData, setAmbianceData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        async function loadAmbiances() {
            setLoading(true);
            try {
                const data = await getAmbiances();
                setAmbianceData(data);
                console.log('ambianceData', data);
            } catch (err) {
                console.log('error', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadAmbiances();
    }, []);

    const ambianceElements = ambianceData
        .filter((ambiance) => selectedAmbiance === ambiance.id)
        .map((ambiance) => {

            //console.log('ambianceAudios', ambianceAudios);
            return (
                <Ambiance
                    key={ambiance.id}
                    ambianceId={ambiance.id}
                    name={ambiance.name}
                    icon={ambiance.emoji}
                    ambianceAudiosIds={ambiance.audiosId}
                    currentPlayingAmbiance={currentPlayingAmbiance}
                    setCurrentPlayingAmbiance={setCurrentPlayingAmbiance}
                />
            );
        }
        );
    const ambiancesMenu = ambianceData.map((ambiance) => {
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

    if (loading) {
        return <h1 aria-live="polite">Loading...</h1>;
    }
    if (error) {
        return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
    }
    return (
        <div className={styles.ambiances}>
            <h2>Ambiances</h2>
            <nav className={`${selectedAmbiance ? styles.opened : null} ${styles.ambiancesList}`}>
                {ambiancesMenu}
            </nav>

            {ambianceElements}
            {children}
        </div>
    );
}

