import Audio from "./Audio";
export default function Ambiance({ name, audios, ambianceId }) {
    const audioElements = audios.map((audio) => {
        return (
            <Audio key={audio.id} name={audio.name} url={audio.url} />
        );
    });
    return (
        <div title={name}>
            <h3>Ambiance {name}</h3>
            {audioElements}
        </div>
    );
}