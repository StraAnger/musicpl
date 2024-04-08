import React from "react";
import styles from "./Album.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";

interface Props {
    album: any;
}

const Album: React.FC<Props> = ({ album }) => {
    return (
        <div className={styles.album}>
            <h2>{album.title}</h2>
            <h2>{album.author}</h2>
            <img src={"./images/" + album.image} alt="Error" />
        </div>
    );
};

export default Album;