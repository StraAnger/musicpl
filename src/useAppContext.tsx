import React, { useContext, useEffect, useState } from "react";
import useSound from "use-sound";
import testSong from "./Music/test.mp3";
import axios from "axios";

const AppContext = React.createContext<any>(null);

export const useAppContext = () => {

    const context = useContext(AppContext);

    if (!context) {
        throw new Error("Context empty")
    }

    return context;
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [albumsList, setAlbumsList] = useState<any[]>([]);

    const [isPlaying, setIsPlaying] = useState(false);

    const [play, { pause, duration, sound }] = useSound(testSong);

    const [currTime, setCurrTime] = useState({
        min: "",
        sec: "",
    }); // current position of the audio in minutes and seconds

    const [seconds, setSeconds] = useState(); // current position of the audio in seconds

    useEffect(() => {
        axios
            .get("http://localhost:3001/albums")
            .then((responce) => {
                setAlbumsList(responce.data);
            })
            .catch((error) => {
                console.log("Data load error", error);
            });
    }, []);    
    
    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    const contextValue = {
        albumsList,
        setAlbumsList,
        isPlaying,
        setIsPlaying,
        play,
        pause,
        duration,
        sound,
        playingButton,
        currTime,
        setCurrTime,
        seconds,
        setSeconds,

    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;