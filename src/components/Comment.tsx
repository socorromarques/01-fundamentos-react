import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment(PostProps: PostProps) {
    return (
        <div className={styles.comment}>   
          <img src="https://github.com/socorromarques.png" alt=""/>
            
          <div className={styles.commentbox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Socorro Marques</strong>
                  <time title="24 de junho às 08:13h" dateTime="2024-06-14 20:13:30">Cerca de 1hora atras</time>
            </div>

            <button title="Deletar comentário">
                  <Trash size={24} />
            </button>
           </header>

           <p>{Muito massa esse seu projeto.}  🚀</p>

           
        </div>

            <footer>
              <button>
                <ThumbsUp /> Aplaudir <span>20</span>
              </button>
            </footer>
            </div>
        </div>
    )
}