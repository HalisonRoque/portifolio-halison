import { useState } from "react";
import styles from "./styles.module.css";

const experiences = [
    {
        title: "Desenvolvedor Full Stack",
        company: "Empresa X",
        period: "2022 - Atual",
        description:
            "Desenvolvimento de sistemas ERP usando React, Node.js e MySQL."
    },
    {
        title: "Analista de Sistemas",
        company: "Empresa Y",
        period: "2020 - 2022",
        description:
            "Automação de processos e integração de dados."
    },
    {
        title: "Suporte Técnico",
        company: "Empresa Z",
        period: "2018 - 2020",
        description:
            "Manutenção de sistemas e atendimento ao cliente."
    }
];

export default function Experience() {
    const [index, setIndex] = useState(0);

    const prev = () => {
        setIndex((prev) =>
            prev - 1 < 0 ? experiences.length - 1 : prev - 1
        );
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % experiences.length);
    };

    const exp = experiences[index];

    return (
        <section id="expirience" className={styles.section}>
            <h2 className={styles.title}>Experiências</h2>

            <div className={styles.carousel}>
                <div className={styles.card}>

                    {/* botão esquerda */}
                    {experiences.length > 1 && (
                        <button
                            className={`${styles.navButton} ${styles.left}`}
                            onClick={prev}
                        >
                            {"<"}
                        </button>
                    )}

                    <h3>{exp.title}</h3>
                    <span>{exp.company}</span>
                    <p className={styles.period}>{exp.period}</p>

                    <p className={styles.description}>
                        {exp.description}
                    </p>

                    {/* botão direita */}
                    {experiences.length > 1 && (
                        <button
                            className={`${styles.navButton} ${styles.right}`}
                            onClick={next}
                        >
                            {">"}
                        </button>
                    )}
                </div>

                {/* 🔥 indicadores */}
                <div className={styles.dots}>
                    {experiences.map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${i === index ? styles.active : ""
                                }`}
                            onClick={() => setIndex(i)}
                        >
                            ●
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}