import styles from './styles.module.css';

export default function About() {

    return (
        <section id="about" className={styles.section}>
            <h2 className={styles.title}>
                Sobre Mim
            </h2>

            <p className={styles.text}>
                Comecei minha trajetória profissional em 2014, em 2017 fiquei responsável por gerenciar uma empresa de pequeno a médio porte onde fiquei até 2024.
                Em 2022, iniciei minha transição para a área de tecnologia, cursando Análise e Desenvolvimento de Sistemas pela UNOPAR,
                conciliando trabalho e estudos.
            </p>
            <p className={styles.text}>
                Sou graduado na área e pós-graduado em Engenharia de Dados e Inteligência Artificial.
                Atuo no desenvolvimento de aplicações web com Node.js, NestJS, TypeScript e React, criando APIs REST,
                microserviços e integrações com bancos como PostgreSQL e SQL Server.
            </p>
            <p className={styles.text}>
                Tenho foco em código limpo, performance e resolução de problemas, com perfil analítico, adaptável e orientado a aprendizado contínuo.
            </p>
        </section>
    )
}