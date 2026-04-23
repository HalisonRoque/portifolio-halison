import { useEffect, useState } from "react";
import foto from '../../assets/img/halisonimg.jpeg';
import avatar from '../../assets/img/javascript.svg';
import styles from './styles.module.css';

export default function HeroImage() {
    const [showAvatar, setShowAvatar] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 1000)); // mostra foto
            setShowAvatar(true);

            await new Promise(r => setTimeout(r, 1500)); // avatar aparece
            setShowAvatar(false);
        };

        sequence();
    }, []);

    return (
        <div className={styles.imageWrapper}>
            <img
                src={foto}
                className={`${styles.image} ${showAvatar ? styles.hide : styles.show}`}
            />

            <img
                src={avatar}
                className={`${styles.image} ${showAvatar ? styles.show : styles.hide}`}
            />
        </div>
    );
}