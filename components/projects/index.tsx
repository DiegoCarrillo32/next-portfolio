import Image from "next/image";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "./projects.module.css";
const Projects = () => {
  const { t } = useTranslation("common");
  const projects = [
    {
      name: "Project YVY",
      description: t("yvyproject"),
      image: "/yvy.webp",
      github: "https://github.com/daniel-rojas28/project-yvy",
      web: "https://yvyapp.plan21.org/",
    },
    {
      name: "Portfolio",
      description: t("portfolioproject"),
      image: "/portfolio.webp",
      github: "https://github.com/DiegoCarrillo32/next-portfolio",
      web: "https://www.diegocarrillo.com/",
    },
    {
      name: "Samantha Zul",
      description: t(""),
      image: "/zul-portfolio.webp",
      web: "https://www.samanthazul.com",
    },
  ];
  return (
    <div>
      {projects.map((pro) => (
        <div className={styles.grid} key={pro.name}>
          <div>
            <h2 className={styles.p}> {pro.name} </h2>
            <h3 className={styles.p1}> {pro.description} </h3>
            {pro.github && (
              <a href={pro.github} style={{ margin: "1rem" }}>
                <Image
                  src={"/github-alt.svg"}
                  height={32}
                  width={32}
                  alt="Github"
                  style={{
                    filter:
                      "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)",
                  }}
                />
              </a>
            )}
            <a href={pro.web} style={{ margin: "1rem" }}>
              <Image
                src={"/chrome.svg"}
                height={32}
                width={32}
                alt="Web link"
                style={{
                  filter:
                    "invert(100%) sepia(0%) saturate(0%) hue-rotate(2deg) brightness(103%) contrast(104%)",
                }}
              />
            </a>
          </div>
          <Image
            src={pro.image ?? ""}
            alt={pro.description}
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
