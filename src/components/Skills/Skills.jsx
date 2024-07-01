import React from "react";

import { getImageUrl } from "../../utils";
import styles from './Skills.module.css';
import skills from '../../data/skills.json';
import libs from '../../data/libs.json';
import tools from '../../data/tools.json';

export const Skills = () => {
    return (
        <section id='skills' className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.subtitles}>
        <h3 className={styles.h3}>Languages</h3> 
        <h3 className={styles.h3}>Frameworks/Libraries</h3>
        </div>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                            <p>{skill.title}</p>
                        </div>
                    })}
                </div>
                <div className={styles.skills}>
                    {libs.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                            <p>{skill.title}</p>
                        </div>
                    })}
                </div>
            </div>
            <h3 className={styles.tools}>Tools/Platforms</h3> 
            <div className={styles.content}>
                <div className={styles.skills}>
                    {tools.map((skill, id) => {
                        return <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                            <p>{skill.title}</p>
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};