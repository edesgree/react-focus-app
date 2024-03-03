import React from "react";
export default function Audio({ name, audioId, url }) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.createRef();

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div id={audioId}>
            <h5>{name}</h5>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
            <audio ref={audioRef} controls>
                <source src={url} type="audio/mpeg" />
            </audio>
        </div>
    );
}

