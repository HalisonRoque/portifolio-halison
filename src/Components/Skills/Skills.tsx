import {
    FaReact,
    FaServer,
    FaDatabase,
    FaLayerGroup,
    FaCogs,
    FaCheckCircle,
    FaVial,
    FaDocker
} from "react-icons/fa";
import Reveal from '../Reveal/Reaveal';
import styles from './styles.module.css';

const skills = [
    {
        title: 'Frontend',
        description: 'Interfaces modernas, responsivas e focadas em experiência do usuário com React e Vue.',
        icon: <FaReact />
    },
    {
        title: 'Backend',
        description: 'APIs, regras de negócio e integração com banco de dados com TypeScript e C#.',
        icon: <FaServer />
    },
    {
        title: 'Fullstack',
        description: 'Integração completa entre frontend e backend usando frameworks para cada tipo de projeto.',
        icon: <FaLayerGroup />
    },
    {
        title: 'Banco de Dados',
        description: 'Modelagem, consultas e otimização de dados com SQL e NoSQL.',
        icon: <FaDatabase />
    },
    {
        title: 'APIs REST',
        description: 'Desenvolvimento e consumo de APIs seguindo padrões REST.',
        icon: <FaCogs />
    },
    {
        title: 'Testes Automatizados',
        description: 'Criação de testes para garantir qualidade e estabilidade do sistema.',
        icon: <FaVial />
    },
    {
        title: 'DevOps',
        description: 'Integração, deploy e automação de processos.',
        icon: <FaDocker />
    },
    {
        title: 'Boas Práticas',
        description: 'Código limpo, organização e padrões de desenvolvimento.',
        icon: <FaCheckCircle />
    }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.grid}>
                {skills.map((item, index) => (
                    <Reveal key={item.title} delay={index * 100}>
                        <div className={styles.card}>

                            <div className={styles.icon}>
                                {item.icon}
                            </div>

                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.description}</p>

                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}