import { useEffect, useRef, useState } from "react";
import foto from '../../assets/img/halisonRoque.jpeg';
import avatarVideo from '../../assets/img/avatar.mp4';
import styles from './styles.module.css';

export default function HeroImage() {
    const [showVideo, setShowVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const sequence = async () => {
            await new Promise(r => setTimeout(r, 1000));

            setShowVideo(true);

            // garante que o vídeo começa do início
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play();
            }
        };

        sequence();
    }, []);

    const handleVideoEnd = () => {
        setShowVideo(false);
    };

    return (
        <div className={styles.imageWrapper}>

            {/* FOTO */}
            <img
                src={foto}
                className={`${styles.image} ${showVideo ? styles.hide : styles.show}`}
            />

            {/* VÍDEO */}
            <video
                ref={videoRef}
                src={avatarVideo}
                muted
                playsInline
                onEnded={handleVideoEnd}
                className={`${styles.image} ${styles.video} ${showVideo ? styles.show : styles.hide}`}
            />
        </div>
    );
}