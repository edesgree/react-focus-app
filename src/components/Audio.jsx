import React from "react";

export default function Audio({ name, audioId, file }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume, setVolume] = React.useState(0.5);
    const audioRef = React.useRef(null);
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
        console.log(file);
    };
    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        audioRef.current.volume = e.target.value;
    };
    return (
        <div id={audioId}>
            <h5>{name}</h5>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
            />
            <audio ref={audioRef} controls={false} >
                <source src={file} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

        </div>
    );
}

