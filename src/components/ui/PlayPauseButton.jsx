import React from "react";
import IconPause from "../../assets/icons/pause.svg";
import IconPlay from "../../assets/icons/play.svg";
import usePlayPauseButton from "../../hooks/usePlayPauseButton";

export default function PlayPauseButton({ initialDisabled, onClickAction, emoji, title }) {
    const [isPlaying, handleClick] = usePlayPauseButton(initialDisabled, onClickAction);
    emoji ? console.log(`play pause button ${emoji} isplaying:${isPlaying}`) : null;


    return (
        <button
            className={`button-toggle ${!initialDisabled ? 'fade' : ''} `}
            title={`${initialDisabled ? 'turn off ' : 'turn on '}${title}`}
            onClick={handleClick}
        >
            {
                emoji ? (
                    emoji
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