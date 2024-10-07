import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}



export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1	
      
    });
  }
    return (
        <div className={styles.comment}>   
          |<img src="https://github.com/socorromarques.png" alt=""/>
            
          <div className={styles.commentbox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                  <strong>Socorro Marques</strong>
                  <time title="24 de junho às 08:13h" dateTime="2024-06-14 20:13:30">Cerca de 1hora atras</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
                  <Trash size={24} />
            </button>
           </header>

           <p>{content} 🚀</p>

           
        </div>

            <footer>
              <button onClick={handleLikeComment}>
                <ThumbsUp /> Aplaudir <span>{likeCount}</span>
              </button>
            </footer>
            </div>
        </div>
    )
}