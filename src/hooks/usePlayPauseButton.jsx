import React from "react";

const usePlayPauseButton = (initialIsPlaying = false, onClickAction) => {
    const [isPlaying, setIsPlaying] = React.useState(initialIsPlaying);
    const handleClick = () => {
        setIsPlaying(prevState => !prevState);
        onClickAction(); // call the provided onclick action
    };
    return [isPlaying, handleClick];
};

export default usePlayPauseButton;