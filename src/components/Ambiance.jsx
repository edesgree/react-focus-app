import styles from "./Ambiance.module.scss";
import Audio from "./Audio";
export default function Ambiance({ name, audios, ambianceId }) {
    const audioElements = audios.map((audio) => {
        return (

            <Audio key={audio.id} name={audio.name} file={audio.file} />
        );
    });
    return (
        <div title={name}>
            <h3>Ambiance {name}</h3>
            <div className={styles.audioList}>
                {audioElements}
            </div>
        </div>
    );
}