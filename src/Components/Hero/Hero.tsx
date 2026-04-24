import styles from './styles.module.css';
import { useTypewriter } from '../../hooks/useTypewriter';
import HeroImage from './HeroImage';
import { useEffect, useState } from 'react';

export default function Hero() {
    const typedText = useTypewriter(["Node", "React", "TypeScript"]);

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