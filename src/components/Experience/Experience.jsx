import React from "react";

import { getImageUrl } from "../../utils";
import styles from './Experience.module.css';
import skills from '../../data/skills.json'
import experience from '../../data/experience.json'

export const Experience = () => {
    return (
        <section id='experience' className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <ul className={styles.experience}>
                    {experience.map((experienceItem, id) => {
                        return <li key={id} className={styles.experienceItem}>
                            <img src={getImageUrl(experienceItem.imageSrc)} alt={`${experienceItem.organisation} Logo`} />
                            <div className={styles.experienceItemDetails}>
                                <h3>{`${experienceItem.role}, ${experienceItem.organisation}`}</h3>
                                <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                                <ul>{experienceItem.experiences.map((experience, id) => {
                                    return <li key={id}>{experience}</li>
                                })}
                                </ul>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    );
}