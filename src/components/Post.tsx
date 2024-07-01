import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { useState } from "react";

interface PostProps {
  author: {
    avatar_url: string;
    name: string;
    role: string;
  };
  content: { type: string; content: string; }[];
  publishedAt: Date;
}


export function Post(PostProps: PostProps) {
  const [comments, setComments] = useState([
    "Post muito maneiro, hein!?",
    2,
  ]);
  const publishedDateFormatted = format(
    PostProps.publishedAt,"d 'de' LLLL 'às' HH:mm'h'", 
    {locale: ptBR}
  )
  const publishedDateRelativeToNow = formatDistanceToNow(PostProps.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([
      ...comments, comments.length + 1]);
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}> 
          <Avatar src={PostProps.author.avatar_url} />
          <div className={styles.authorInfo}>
            <strong>{PostProps.author.name}</strong>
            <span>{PostProps.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted } dateTime={PostProps.publishedAt.toISOString()}>
          
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {PostProps.content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea
        placeholder="Deixe um comentário"
      />  
    <footer>
      <button onClick={handleCreateNewComment}>Criar Novo Comentário</button>
    </footer>
  </form>
  <div className={styles.commentList}>
    {comments.map(comment => {
      return <Comment content={comment} />
    })}
    <Comment />
    <Comment />
  </div>
</article>
  )
}