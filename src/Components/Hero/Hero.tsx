import styles from './styles.module.css';
import { useTypewriter } from '../../hooks/useTypewriter';
import HeroImage from './HeroImage';

export default function Hero() {

    const typedText = useTypewriter(["Node", "React", "TypeScript"]);

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
            <div className={styles.editImage}>
                <HeroImage />
            </div>
        </section>
    )
}