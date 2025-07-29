import React from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./experience.module.css";
interface Exp {
  title: string;
  company: string;
  date: string;
  description: string;
}
const Experience = () => {
  const { t } = useTranslation("common");
  const experience = [
    {
      title: "Fullstack Developer",
      company: "Konrad Group",
      date: "2024 July - Present",
      description: t("work5"),
    },
    {
      title: "Fullstack Developer",
      company: "Nativo",
      date: "2021 December - 2022 February",
      description: t("work1"),
    },
    {
      title: "Frontend Developer",
      company: "Plan 21",
      date: "2021 September - 2023 April",
      description: t("work3"),
    },
    {
      title: "Fullstack Developer",
      company: "Freelance",
      date: "2023 July - 2024 January",
      description: t("work4"),
    },
  ];
  const [Active, setActive] = React.useState(experience[0] as Exp);
  return (
    <div className={styles.grid}>
      <ul>
        {experience.map((exp) => (
          <li
            className={
              Active.company == exp.company
                ? `${styles.li} ${styles.active}`
                : styles.li
            }
            onClick={() => {
              setActive(exp);
            }}
            key={exp.company}
          >
            {" "}
            <span className={styles.span}>{exp.company}</span>{" "}
          </li>
        ))}
      </ul>
      <div className={styles.info}>
        <p className={styles.p}> {Active.title} </p>
        <p className={styles.p}> {Active.date} </p>
        <p className={styles.p1}> {Active.description} </p>
      </div>
    </div>
  );
};

export default Experience;
