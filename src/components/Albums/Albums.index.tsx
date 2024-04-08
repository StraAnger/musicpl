import React from "react";
import styles from "./Albums.module.scss";
import { useAppContext } from "./../../useAppContext.tsx";
import Album from "../Album/Album.index.tsx";

const Albums: React.FC = () => {

    const { albumsList } = useAppContext();

    return (
        <div className={styles.album}>
            {albumsList.map((el: any) => (
                <Album key={el.id} album={el} />
            ))}
        </div>
    );
};

export default Albums;