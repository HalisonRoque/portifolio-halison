import { useEffect, useState } from "react";
import styles from './styles.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

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
                <a className={styles.link} onClick={() => setOpen(false)} href="#home"><h1 className={styles.logo}>HALISON ROQUE</h1></a>

                {/* BOTÃO HAMBURGUER */}
                <div
                    className={styles.hamburger}
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </div>

                {/* MENU */}
                <ul className={`${styles.nav} ${open ? styles.open : ""}`}>
                    <li><a className={styles.link} onClick={() => setOpen(false)} href="#about">Sobre</a></li>
                    <li><a className={styles.link} onClick={() => setOpen(false)} href="#skills">Habilidades</a></li>
                    <li><a className={styles.link} onClick={() => setOpen(false)} href="#expirience">Experiências</a></li>
                    <li><a className={styles.link} onClick={() => setOpen(false)} href="#contact">Contatos</a></li>
                </ul>
            </div>
        </header>
    );
}