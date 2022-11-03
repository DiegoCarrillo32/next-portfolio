import React, { useState } from "react";
import styles from './Work.module.css'
export const Work = () => {
    const workList = [
        {
            name: "Nativo",
            start:"December 2021",
            end:"February 2022",
            desc: "I work in Nativo as an intern for 3 months, They teached me a lot about agile methodologies, angularJS, Ruby on Rails and Mongo",
        },    {
            name: "Canam Tech",
            start:"June 2022",
            end:"August 2022",
            desc: "I worked as an Intern for two months, I used React to develop an interface.",
        },

        ];
    const [CurrentWorkplace, setCurrentWorkplace] = useState(workList[0]);


    return (
           
               <p style={{fontSize:'1.6rem'}}>Soy un estudiante de Ingenieria en Computacion, actualmente cursando mi tercer año de carrera,
                   soy muy autodidacta y me gusta investigar sobre nuevas tecnologias, me gustan los videojuegos, hacer ejercicio y aprender en mi tiempo libre</p>

            );
};
