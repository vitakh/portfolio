import React from "react";
import { getImageUrl } from "../../utils";

import styles from './Profile.module.css';

export const Profile = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Vita!</h1>
            <p className={styles.description}>I am a software developer.</p>
            <a className={styles.contactBtn} href="mailto:vita.khan.1611@gmail.com">Contact Me</a>
        </div>
        <img src={getImageUrl('profile/pfp.png')} alt='My pfp' className={styles.pfpImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}