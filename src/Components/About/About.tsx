import styles from './styles.module.css';

export default function About() {

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>
                Sobre Mim
            </h2>

            <p className={styles.text}>
                Sou programador web...
            </p>
        </section>
    )
}