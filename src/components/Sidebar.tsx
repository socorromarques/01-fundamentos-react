import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://media.istockphoto.com/id/1360521207/pt/foto/businessman-using-a-computer-analysis-for-process-and-workflow-automation-with-flowchart-a.jpg?s=1024x1024&w=is&k=20&c=SrI_0N2J48G-l-_BmiJ73dlnUzQejI__ff39qvDll-8="  />

            <div className={styles.profile}>
                <img className={styles.avatar} src='https://github.com/socorromarques.png'/>
                <strong>Socorro Marques</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">    
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
