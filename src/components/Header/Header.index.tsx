import React from "react";
import styles from "./Header.module.scss"
import { PiGearLight } from "react-icons/pi";
import { GoBell } from "react-icons/go";
import { TbMenu } from "react-icons/tb";

const Header: React.FC = () => {
    return (
        <header>
            <div className={styles.topRow}>
                <div className={styles.logo}></div>
                <input className={styles.searchInput} placeholder="Search for song artists etc." />
                <div className={styles.dummyDiv}></div>
                <button className={styles.premium}>Explore Premium</button>
                <div className={styles.nav}>
                    <div className="navOptions">
                        <PiGearLight />
                    </div>
                    <div className="navMessages">
                        <GoBell />
                    </div>
                    <div className={styles.profile}></div>
                    <div className="navMenu">
                        <TbMenu />
                    </div>
                </div>
            </div>
            <div className={styles.pinky}></div>
        </header>
    );
};

export default Header;