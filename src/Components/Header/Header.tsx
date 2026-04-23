import { useEffect, useState } from "react";
import styles from './styles.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.menu} ${scrolled ? styles.small : ""}`}>
            <div className={styles.content}>
                <h1 className={styles.logo}>HALISON ROQUE</h1>

                <ul className={styles.nav}>
                    <li><a className={styles.link} href="#intro">Sobre</a></li>
                    <li><a className={styles.link} href="#skills">Habilidades</a></li>
                    <li><a className={styles.link} href="#contact">Contatos</a></li>
                </ul>
            </div>
        </header>
    );
}