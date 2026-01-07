import React from "react";

import styles from './About.module.css';
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img className={styles.aboutImage} src={getImageUrl('about/boba.webp')}
                alt='My fav boba'/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <div className={styles.aboutItemText}>
                            <h3>I am Vita Khan</h3>
                            <p>A current Master of Computer Science student at Northeastern University</p>
                            <p>Graduated with BSCS and minor in Business Administration</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" /> 
                        <div className={styles.aboutItemText}>
                            <p>Passionate about exploring various areas of Computer Science, including Software Development and Web Development</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                        <p>I am proficient in TypeScript, Java, JavaScript, and Python, and have hands-on experience with tools and frameworks such as AWS, Angular, React, and Bootstrap.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <p>Additionally, I have worked with both SQL and NoSQL databases.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};