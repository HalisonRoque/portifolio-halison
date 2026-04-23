import styles from './styles.module.css';
import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    Feito com
                    <span className={styles.heart}> ❤ </span>
                    por <strong>Halison Roque</strong>
                </p>

                <div className={styles.socials}>
                    <a href="https://www.instagram.com/halison_tech/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/HalisonRoque" target="_blank">
                        <FaGithub />
                    </a>
                    <a href="https://wa.me/5583993973134" target="_blank">
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:halisonyasha@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>

                <p className={styles.copy}>
                    © {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
}