import styles from './styles.module.css';

const skills = [
    'React',
    'TypeScript',
    'Nest'
]

export default function Skills() {

    return (

        <section className={styles.section}>

            <div className={styles.grid}>

                {skills.map(item => (
                    <div
                        key={item}
                        className={styles.card}
                    >
                        {item}
                    </div>
                ))}

            </div>

        </section>
    )
}