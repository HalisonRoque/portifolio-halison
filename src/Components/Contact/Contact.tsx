import { FaInstagram, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import styles from './styles.module.css';
import logo from '../../assets/img/javascript.svg'

export default function Contact() {

    return (
        <section
            id="contact"
            className={styles.section}
        >
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Vamos Conversar?
                    </h2>

                    <p className={styles.text}>
                        Entre em contato comigo pelas redes abaixo.
                        Seja para projetos, dúvidas ou trocar ideias.
                    </p>

                    <div className={styles.links}>

                        <a
                            href="https://www.instagram.com/halison_tech/"
                            target="_blank"
                            className={`${styles.button} ${styles.instagram}`}
                        >
                            <FaInstagram /> Instagram
                        </a>

                        <a
                            href="https://github.com/HalisonRoque"
                            target="_blank"
                            className={`${styles.button} ${styles.github}`}
                        >
                            <FaGithub /> GitHub
                        </a>

                        <a
                            href="https://wa.me/5583993973134"
                            target="_blank"
                            className={`${styles.button} ${styles.whatsapp}`}
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>

                        <a
                            href="mailto:seuemail@exemplo.com"
                            className={`${styles.button} ${styles.email}`}
                        >
                            <FaEnvelope /> Email
                        </a>
                    </div>
                </div>

                <div className={styles.imageBox}>
                    <img
                        src={logo}
                        alt="Javascript"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    )
}