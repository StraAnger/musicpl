import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss"
import { useAppContext } from "./../../useAppContext.tsx";

const Footer: React.FC = () => {

    const { currTime, setCurrTime, seconds, setSeconds, duration, sound } = useAppContext();
    const [time, setTime] = useState({ min: 0, sec: 0 });

    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setTime({ min, sec: secRemain });
    }, [duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                const currentSec = sound.seek([]);
                setSeconds(currentSec);
                const min = Math.floor(currentSec / 60);
                const sec = Math.floor(currentSec % 60);
                setCurrTime({ min, sec });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound, setSeconds, setCurrTime]);


    return (
        <footer className={styles.footer}>
            <div>
                <div className="time">
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                </div>
                <input
                    type="range"
                    min="0"
                    max={duration / 1000}
                    defaultValue="0"
                    value={seconds}
                    className={styles.timeline}
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                        setSeconds(parseInt(e.target.value)); // Update seconds state
                    }}
                />
            </div>
        </footer>
    );
};

export default Footer;