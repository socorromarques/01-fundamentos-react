import { PencilLine } from '@phosphor-icons/react'
import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://media.istockphoto.com/id/1360521207/pt/foto/businessman-using-a-computer-analysis-for-process-and-workflow-automation-with-flowchart-a.jpg?s=1024x1024&w=is&k=20&c=SrI_0N2J48G-l-_BmiJ73dlnUzQejI__ff39qvDll-8=" alt='#' />

            <div className={styles.profile}>
                <Avatar src="https://github.com/socorromarques.png" alt="Socorro Marques" />
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
