import React, { useContext } from "react";

const PlayPauseContext = React.createContext();

export const usePlayPause = () => useContext(PlayPauseContext);

export const PlayPauseProvider = ({ children }) => {
    const [isAmbiancePlaying, setIsAmbiancePlaying] = React.useState(false);

    const togglePlayPause = () => {
        setIsAmbiancePlaying(prevState => !prevState);
        console.log('general playing ', isAmbiancePlaying);
    };

    return (
        <PlayPauseContext.Provider value={{ isAmbiancePlaying, togglePlayPause }}>
            {children}
        </PlayPauseContext.Provider>
    );
};

export default PlayPauseContext;