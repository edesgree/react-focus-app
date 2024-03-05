import React from "react";

const usePlayPauseButton = (initialIsActive = false, onClickAction) => {
    const [isActive, setIsActive] = React.useState(initialIsActive);
    const handleClick = () => {
        setIsActive(prevState => !prevState);
        onClickAction(); // call the provided onclick action
    };
    return [isActive, handleClick];
};

export default usePlayPauseButton;