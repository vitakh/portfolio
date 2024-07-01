import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project: {title, imageSrc, description, skills, date, source }}) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={getImageUrl(imageSrc)} alt={title}></img>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
         {skills.map((skill, id) => {
          return <li key={id} className={styles.skill}>{skill} </li>;
        })}
      </ul>
      {source && <div className={styles.links}>
        <a href={source} className={styles.link}>Source</a>
      </div>}
      
    </div>
  );
};
