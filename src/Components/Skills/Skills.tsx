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
        description: 'Interfaces modernas, responsivas e focadas em experiência do usuário.',
        icon: <FaReact />
    },
    {
        title: 'Backend',
        description: 'APIs, regras de negócio e integração com banco de dados.',
        icon: <FaServer />
    },
    {
        title: 'Fullstack',
        description: 'Integração completa entre frontend e backend.',
        icon: <FaLayerGroup />
    },
    {
        title: 'Banco de Dados',
        description: 'Modelagem, consultas e otimização de dados.',
        icon: <FaDatabase />
    },
    {
        title: 'APIs REST',
        description: 'Desenvolvimento e consumo de APIs seguindo padrões REST.',
        icon: <FaCogs />
    },
    {
        title: 'Testes Automatizados',
        description: 'Criação de testes para garantir qualidade e estabilidade.',
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
        <section className={styles.section}>
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