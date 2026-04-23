import styles from './styles.module.css';

export default function Footer() {

    return (

        <footer className={styles.footer}>

            <p className={styles.text}>

                <a
                    href="https://www.instagram.com/halison_tech/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    Feito com
                    <span className={styles.heart}>
                        ❤
                    </span>

                    por Halison Roque

                </a>

            </p>

        </footer>
    )
}