import React from "react";
import IconPause from "../../assets/icons/pause.svg";
import IconPlay from "../../assets/icons/play.svg";
import usePlayPauseButton from "../../hooks/usePlayPauseButton";

export default function PlayPauseButton({ initialDisabled, onClickAction, emoji }) {
    const [isPlaying, handleClick] = usePlayPauseButton(initialDisabled, onClickAction);
    emoji ? console.log(`play pause button ${emoji} isplaying:${isPlaying}`) : null;
    return (
        <button className={`button-toggle ${!isPlaying ? 'fade' : ''} `} onClick={handleClick}>
            {
                emoji ? (
                    <span role="img" aria-label="emoji">{emoji}</span>
                ) : (
                    isPlaying ?
                        (
                            <img src={IconPause} alt="pause" aria-label="pause" />
                        ) :
                        (
                            <img src={IconPlay} alt="play" aria-label="play" />
                        )
                )


            }
        </button >
    );
}