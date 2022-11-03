import styles from './section.module.css';
import {useRef} from "react";
import {useInView} from "framer-motion";
export const Section = ({children, color, bg}:any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
            <section ref={ref} className={(bg)? `${styles.grid} ${styles.bgi}`: styles.grid} style={{backgroundColor:color}}>
                <article style={{
                    transform: isInView ? "none" : "translateX(-900px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    margin:'5px'
                }} >
                    {children[0]}
                </article>
                <article style={{
                    transform: isInView ? "none" : "translateX(-900px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    margin:'5px'
                }}>
                    {children[1]}
                </article>

            </section>
    )
}