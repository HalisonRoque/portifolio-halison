import styles from './styles.module.css';
import { useTypewriter } from '../../hooks/useTypewriter';
import HeroImage from './HeroImage';
import { useEffect, useState, type JSX } from 'react';

import { FaReact, FaNodeJs, FaGlobe } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const techIcons: Record<string, JSX.Element> = {
    Node: <FaNodeJs />,
    React: <FaReact />,
    TypeScript: <SiTypescript />,
    Web: <FaGlobe />
};

export default function Hero() {
    const typedText = useTypewriter(["Node", "React", "TypeScript", "Web"]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 500);
        };

        checkScreen(); // executa ao carregar
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <section className={styles.section}>
            <div>
                <h2 className={styles.title}>
                    Desenvolvedor <br />
                    <span className={styles.highlight}>
                        {typedText}
                        <span className={styles.icon}>
                            {techIcons[typedText]}
                        </span>
                    </span>
                </h2>

                <p className={styles.text}>
                    Transformando ideias em soluções digitais.
                </p>
            </div>

            {!isMobile && (
                <div className={styles.editImage}>
                    <HeroImage />
                </div>
            )}
        </section>
    );
}