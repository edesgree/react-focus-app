import React from "react";
import IconPause from "../../assets/icons/pause.svg";
import IconPlay from "../../assets/icons/play.svg";
import usePlayPauseButton from "../../hooks/usePlayPauseButton";

export default function PlayPauseButton({ initialDisabled, onClickAction, emoji, title }) {
    const [isPlaying, handleClick] = usePlayPauseButton(initialDisabled, onClickAction);

    return (
        <button
            className={`button-toggle button-play-pause ${emoji && (initialDisabled || !isPlaying) ? 'fade' : ''} `}
            title={`${isPlaying ? 'turn off ' : 'turn on '}${title}`}
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