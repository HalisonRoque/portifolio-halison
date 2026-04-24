import { useState } from "react";
import styles from "./styles.module.css";

const experiences = [
    {
        title: "Desenvolvedor Full Stack",
        company: "Siena Company",
        description:
            `"Desenvolvimento de software com migração de sistema legado
            com backend em Nest.JS e frontend com React"
            `
    },
    {
        title: "Desenvolvedor Full Stack - Freelancer",
        company: "Agilmax contrutora",
        description:
            `"Automação de processos e integração com 
            banco de dados para controle de funcionários e contas,
            backend com .NET(Framework core) e frontend com Vue.Js"
            `
    },
    {
        title: "Auxiliar Administrativo",
        company: "Engenho Triunfo",
        description:
            `"Manutenção de sistemas, atendimento ao cliente,
            controle financeiro, funcionários, produção, estoque e vendas"          
            `
    },
    {
        title: "Desenvolvedor Backend .NET",
        company: "Projeto Pessoal",
        description:
            `"Criação de sistema para controle de gastos de um condomínio
            onde implementei o backend com
            banco de dados e frontend com React e Material UI."
            `
    },
    {
        title: "Desenvolvedor Frontend React/Node",
        company: "Landing page freelancer",
        description:
            `"Criação de landing page profissional com foco em porrtifólio pessoal
            com React entregando qualidade e boas práticas."       
            `
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