import React from "react";
import styles from "./Player.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IoPauseCircleOutline } from "react-icons/io5";
import { IoIosRepeat } from "react-icons/io";
import { AiOutlineStepBackward } from "react-icons/ai";
import { AiOutlineStepForward } from "react-icons/ai";
import Albums from "../Albums/Albums.index.tsx";

const Player: React.FC = () => {

    const { isPlaying, playingButton } = useAppContext();

    return (
        <div className={styles.playerMain}>
            <div className={styles.previous}>
            </div>
            <div className={styles.playerContainer}>
                <div className={styles.player}></div>
                <div className={styles.playerNav}>

                    <AiOutlineStepBackward />
                    <div>
                        {!isPlaying ? (
                            <IoPlayCircleOutline className={styles.playButton1} onClick={playingButton} />
                        ) : (
                            <IoPauseCircleOutline className={styles.playButton2} onClick={playingButton} />
                        )}
                    </div>
                    <AiOutlineStepForward />
                    <IoIosRepeat />
                </div>
            </div>
            <Albums />
            <div className={styles.next}>
            </div>
            <div className={styles.bluewy}>
            </div>
        </div>
    );
};

export default Player;